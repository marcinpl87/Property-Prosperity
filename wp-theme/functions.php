<?php
const TABLE_FINANCE = "app_data";

require_once get_template_directory().'/functions-lib.php';
require_once get_template_directory().'/functions-api.php';

remove_filter( //this filter is added by logged-in-only plugin...
    'rest_authentication_errors', //...but I need to remove it...
    'logged_in_only_rest_api' //...to enable REST WP JSON API
);
?>
