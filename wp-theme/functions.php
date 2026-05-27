<?php
/**
 * El Hato y el Garabato — WordPress theme functions
 *
 * Routes every request to the matching Astro-generated HTML file in /dist/.
 * Path replacement converts /_astro/ to the theme URL at runtime.
 */

function hato_theme_setup(): void {
    add_theme_support('title-tag');
    add_theme_support('html5', ['script', 'style']);
}
add_action('after_setup_theme', 'hato_theme_setup');

function hato_serve_astro_page(): void {
    $uri   = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $base  = get_template_directory_uri();
    $dist  = get_template_directory() . '/dist';
    $path  = rtrim($uri, '/');

    // /ruta/ → dist/ruta/index.html  |  /ruta → dist/ruta.html
    $candidates = [
        $dist . $path . '/index.html',
        $dist . $path . '.html',
    ];

    $html_file = null;
    foreach ($candidates as $candidate) {
        if (file_exists($candidate)) {
            $html_file = $candidate;
            break;
        }
    }

    // No match → serve Astro 404
    if (!$html_file) {
        $fallback = $dist . '/404.html';
        if (!file_exists($fallback)) return;
        $html_file = $fallback;
        status_header(404);
    }

    $html = file_get_contents($html_file);

    // Fallback path fixes (build-wp-theme.mjs patches these at build time;
    // these str_replace calls are a safety net for any residual occurrences).
    $html = str_replace('="/_astro/',         '="' . $base . '/dist/_astro/',         $html);
    $html = str_replace('src="/_astro/',      'src="' . $base . '/dist/_astro/',      $html);
    $html = str_replace('href="/favicon.png"','href="' . $base . '/dist/favicon.png"', $html);
    $html = str_replace('src="/favicon.png"', 'src="'  . $base . '/dist/favicon.png"', $html);

    status_header(200);
    header('Content-Type: text/html; charset=UTF-8');
    echo $html;
    exit;
}
add_action('template_redirect', 'hato_serve_astro_page', 1);
