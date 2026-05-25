# Spec: Cookie Consent + Age Gate siempre visible

**Fecha:** 2026-05-25  
**Rama:** astro

---

## Contexto

El proyecto no tiene sistema de consentimiento de cookies. Actualmente `stores/ui.js` y `stores/cart.js` escriben en `localStorage` sin pedir permiso. Además, el age gate usa `sessionStorage` para no volver a mostrarse en la misma sesión; el requisito es que aparezca **siempre**, independientemente de si el usuario ya lo aceptó antes.

---

## Decisiones de diseño

| Pregunta | Decisión |
|---|---|
| Posición del banner | Tarjeta flotante esquina inferior izquierda |
| Cuándo aparece | Después de aceptar el age gate, si `hato-consent` es null |
| Idiomas | Bilingüe ES/EN, igual que el resto del sitio |
| Si rechaza: ¿guardar algo? | Solo el flag `hato-consent=false` (estrictamente necesario) |
| Icono persistente | Icono galleta SVG sin círculo exterior, esquina inf. izquierda. Hover → chip "Cookies". Clic → reabre banner |
| Age gate | Sin ningún tipo de persistencia — siempre se muestra |

---

## Flujo de pantallas

```
Splash screen (primera visita de sesión)
    ↓
Age gate  — siempre, sin sessionStorage ni localStorage
    ↓ usuario confirma ser mayor de edad
¿hato-consent === null?
    ├── sí → CookieBanner
    │           ├── Aceptar  → hato-consent = "true"  → contenido
    │           └── Rechazar → hato-consent = "false" → contenido
    └── no → contenido directamente

CookieIcon siempre visible tras el age gate
    hover  → aparece chip "Cookies" con animación slide
    clic   → reabre CookieBanner para cambiar preferencia
```

---

## Qué se guarda en localStorage

| Clave | Acepta | Rechaza |
|---|---|---|
| `hato-consent` | `"true"` | `"false"` (estrictamente necesario) |
| `hato-lang` | ✅ persiste | ❌ sesión solo |
| `hato-theme` | ✅ persiste | ❌ sesión solo |
| `hato-cart` | ✅ persiste | ❌ sesión solo |

Si rechaza, la web funciona igual pero idioma (`es`), tema (`light`) y carrito (vacío) vuelven a los valores por defecto en cada visita.

---

## Ficheros a crear

### `src/stores/consent.js`
- Atom nanostores `$cookieConsent`: `null | true | false`
- Init: lee `localStorage.getItem('hato-consent')` → `null` si no existe, `true/false` según valor
- `setConsent(value: boolean)`: escribe el atom + `localStorage.setItem('hato-consent', String(value))`

### `src/components/layout/CookieBanner.jsx`
- Tarjeta flotante `position: fixed; bottom: 1.25rem; left: 1.25rem`
- Fondo `#faf8f3`, borde superior dorado `2px solid var(--gold)`
- Label "COOKIES" en pequeño, descripción de qué se guarda (idioma, tema, carrito), dos botones: **Aceptar** (btn-primary) / **Rechazar** (btn-ghost)
- Texto bilingüe ES/EN via `useLanguage`
- Al aceptar/rechazar: llama a `setConsent(true/false)` y cierra el banner
- Entra con animación Framer Motion (fade + slide desde abajo, igual que el age gate)

### `src/components/layout/CookieIcon.jsx`
- `position: fixed; bottom: 1.25rem; left: 1.25rem; z-index: 200`
- SVG de galleta (cookie), sin círculo exterior, color `var(--gold)`, opacity 0.7 → 1 en hover
- Hover: chip "COOKIES" desliza hacia la derecha con `transition: opacity 0.2s, transform 0.2s`
- Clic: llama a `onReopen()` prop (abre CookieBanner)
- Solo se muestra cuando `$cookieConsent !== null` (ya tomó una decisión)

---

## Ficheros a modificar

### `src/stores/ui.js`
- `setLanguage(lang)`: añadir guard — solo `localStorage.setItem` si `$cookieConsent.get() === true`
- `toggleTheme()`: mismo guard
- Init de `$language` y `$theme`: los átomos se inicializan a nivel de módulo antes de que `$cookieConsent` exista. Leer `localStorage.getItem('hato-consent') === 'true'` directamente (no via atom) para el valor inicial. Si no hay consentimiento: valores por defecto (`'es'`, `'light'`)

### `src/stores/cart.js`
- `getInitialItems()`: mismo patrón que ui.js — leer `localStorage.getItem('hato-consent') === 'true'` directamente para el valor inicial
- `$cartItems.listen(...)`: solo escribir si `$cookieConsent.get() === true`

### `src/components/layout/AstroGlobalWrapper.jsx`
- **Age gate**: eliminar `sessionStorage.getItem(SESSION_KEY)` y `sessionStorage.setItem(SESSION_KEY, '1')`. El estado `ageVerified` siempre arranca en `false`.
- Eliminar `SESSION_KEY` constante.
- Añadir estado `showCookieBanner`: se activa cuando `ageVerified === true && $cookieConsent === null`
- Añadir estado `cookieIconVisible`: se activa cuando `ageVerified === true && $cookieConsent !== null`
- Montar `<CookieBanner>` y `<CookieIcon>` con `AnimatePresence`

---

## Orden de montaje en AstroGlobalWrapper

```jsx
<>
  <LenisManager />
  <ScrollProgress />
  <Cursor />
  <BackToTop />

  {/* 1. Splash */}
  <AnimatePresence>
    {!splashDone && <SplashScreen onComplete={...} />}
  </AnimatePresence>

  {/* 2. Age gate — siempre */}
  <AnimatePresence>
    {splashDone && !ageVerified && <AgeGate onVerified={...} />}
  </AnimatePresence>

  {/* 3. Cookie banner — solo si consent es null */}
  <AnimatePresence>
    {ageVerified && showCookieBanner && (
      <CookieBanner onDecide={handleCookieDecide} />
    )}
  </AnimatePresence>

  {/* 4. Icono persistente — cuando ya decidió y el banner está cerrado */}
  {ageVerified && cookieIconVisible && !showCookieBanner && (
    <CookieIcon onReopen={() => setShowCookieBanner(true)} />
  )}
</>
```

---

## Notas de implementación

- `$cookieConsent` se inicializa antes que `$language` y `$theme` para que los guards funcionen en el primer render
- El `CookieBanner` no bloquea la UI (no es un modal con overlay) — el usuario puede hacer scroll mientras decide
- Cuando el usuario cambia de opinión (clic en CookieIcon → Rechazar habiendo aceptado antes): limpiar `hato-lang`, `hato-theme` y `hato-cart` de localStorage
- CSS del icono y banner vive en `App.css` bajo las secciones `/* ── CookieBanner ──*/` y `/* ── CookieIcon ──*/`
