<?php
/**
 * Front page — handled by hato_serve_astro_page() in functions.php.
 * This file is a fallback in case template_redirect doesn't fire.
 */

$dist = get_template_directory() . '/dist/index.html';
$base = get_template_directory_uri();

if (!file_exists($dist)) {
    wp_die('<p>Run <code>npm run build:wp</code> and re-upload the theme.</p>', 'Missing build', ['response' => 503]);
}

$html = file_get_contents($dist);
$html = str_replace('="/_astro/',        '="' . $base . '/dist/_astro/',        $html);
$html = str_replace('href="/favicon.png"', 'href="' . $base . '/dist/favicon.png"', $html);
echo $html;
exit;
