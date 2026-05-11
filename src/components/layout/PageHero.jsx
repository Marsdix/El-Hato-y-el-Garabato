// Hero reutilizable para páginas internas (no el hero de Home).
// Uso: <PageHero eyebrow="..." title={<>Texto <em>em</em></>} backgroundImage="/images/..." />

export default function PageHero({
  eyebrow,
  title,
  backgroundImage,
  imagePosition = '50% 50%',
}) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: imagePosition,
        }}
      />
      <div className="page-hero-vignette" />
      <div className="page-hero-content">
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
      </div>
    </section>
  )
}
