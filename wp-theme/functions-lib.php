<?php
function secureData($data) {
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
        return array_merge(
                $data(),
                [
                'session' => '1',
                ]
        );
    }
    else {
        return [
            'session' => '0',
        ];
    }
}
?>
