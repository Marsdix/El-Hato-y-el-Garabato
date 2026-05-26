<?php
/**
 * Front page template — outputs the complete Astro-generated HTML.
 *
 * Replaces root-relative asset paths with the theme's absolute URL
 * so /wp-content/themes/mi-tema-astro/_astro/* are resolved correctly.
 */

$html_file = get_template_directory() . '/index.html';

if (!file_exists($html_file)) {
    wp_die(
        '<p>Theme assets not found. Run <code>npm run build:wp</code> and re-upload the theme.</p>',
        'Missing Astro build',
        ['response' => 503]
    );
}

$html = file_get_contents($html_file);
$base = rtrim(get_template_directory_uri(), '/');

// Fix all root-relative Astro asset references (JS, CSS, images in /_astro/)
$html = str_replace('="/_astro/', '="' . $base . '/_astro/', $html);

// Fix favicon and other public/ assets copied to theme root
$html = str_replace('href="/favicon.png"', 'href="' . $base . '/favicon.png"', $html);
$html = str_replace('href="/favicon.png"', 'href="' . $base . '/favicon.png"', $html); // apple-touch-icon

// Output and stop — prevents WordPress from appending anything
echo $html;
exit;
