<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Test</title>
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
    </head>
    <body>
        <?php if (
            !empty(wp_get_current_user()->roles)
        ): ?>
            <div
                id="root"
                data-nonce="<?php
                    echo wp_create_nonce("wp_rest");
                ?>"
                data-user="<?php
                    echo wp_get_current_user()->user_login;
                ?>"
                data-path="<?php
                    echo get_template_directory_uri();
                ?>"
            >
                Loading...
            </div>
            <script type="module">
                import RefreshRuntime from 'http://localhost:5173/@react-refresh'
                RefreshRuntime.injectIntoGlobalHook(window)
                window.$RefreshReg$ = () => {}
                window.$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
            <script type="module" src="http://localhost:5173/@vite/client"></script>
            <script type="module" src="http://localhost:5173/src/main.tsx"></script>
        <?php else: ?>
            <h2 class="p-10">
                <a
                    href="/wp-admin/"
                >
                    Please log in.
                </a>
            </h2>
        <?php endif; ?>
    </body>
</html>
