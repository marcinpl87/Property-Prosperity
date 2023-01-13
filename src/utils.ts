class Utils {
    private API_ENDPOINT = '/wp-json/mapi/';

    expiredSessionHandler() {
        console.log('User session error');
        setTimeout(() => {
            location.reload();
        }, 5000);
    };

    secureFetch(url: string, callback: (data: any) => void) {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set(
            'x-wp-nonce',
            document.querySelector(
                '#root'
            )!.getAttribute(
                'data-nonce'
            ) || ''
        );
        fetch(
            this.API_ENDPOINT + url,
            {
                headers: requestHeaders,
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.session !== '1') {
                    this.expiredSessionHandler();
                } else {
                    callback(data.data);
                }
            });
    };
};

export default new Utils();
