<?php
function secureData($data) {
    header('Content-type:application/json;charset=utf-8');
    if (
        isset(
            getallheaders()['x-wp-nonce']
        )
        && !!wp_verify_nonce(
            getallheaders()['x-wp-nonce'],
            'wp_rest'
        )
        && !!is_user_logged_in()
    ) {
        echo json_encode(
            array_merge(
                $data(),
                [
                    'session' => '1',
                ]
            ),
            JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES
        );
    }
    else {
        echo json_encode([
            'session' => '0',
        ]);
    }
}
?>
