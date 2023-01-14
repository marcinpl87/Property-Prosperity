<?php
add_action('rest_api_init', function() use(
    &$wpdb
) {
    register_rest_route(
        'mapi',
        '/finance',
        [
            'methods' => 'get',
            'permission_callback' => '__return_true',
            'callback' => function(
                WP_REST_Request $params
            ) use(
                &$wpdb
            ) {
                return secureData(function() use(
                    &$params,
                    &$wpdb
                ) {
                    return (array) new WP_REST_Response([
                        'finance' => (array) $wpdb->get_results(
                            '
                                SELECT *
                                FROM '.$wpdb->prefix.TABLE_FINANCE.'
                                LIMIT 100
                            ',
                            ARRAY_A
                        ),
                    ]);
                });
            },
        ]
    ); //URL: /wp-json/mapi/finance
});
?>
