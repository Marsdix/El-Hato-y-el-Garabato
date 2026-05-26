<?php
/**
 * El Hato y el Garabato — WordPress theme functions
 *
 * Assets are injected directly by front-page.php from the Astro HTML output.
 * No wp_enqueue needed — the full HTML (including <head>) comes from Astro.
 */

function hato_theme_setup(): void {
    add_theme_support('title-tag');
    add_theme_support('html5', ['script', 'style', 'navigation-widgets']);
}
add_action('after_setup_theme', 'hato_theme_setup');
