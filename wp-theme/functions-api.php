<?php
add_action('rest_api_init', function() use(
    &$wpdb
) {
    register_rest_route(
        'mapi',
        '/test',
        [
            'methods' => 'get',
            'permission_callback' => '__return_true',
            'callback' => function(
                WP_REST_Request $params
            ) use(
                &$wpdb
            ) {
                secureData(function() use(
                    &$params,
                    &$wpdb
                ) {
                    return (array) new WP_REST_Response([
                        'test' => 123,
                    ]);
                });
            },
        ]
    ); //URL: /wp-json/mapi/stats-health
});
?>
