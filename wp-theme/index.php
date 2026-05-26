<?php
/**
 * Required fallback template (WordPress won't activate a theme without this).
 * All front-page traffic is handled by front-page.php.
 * Other WordPress routes redirect to the front page.
 */
wp_redirect(home_url('/'), 302);
exit;
