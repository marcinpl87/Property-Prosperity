class Utils {
    private API_ENDPOINT = '/wp-json/mapi/';

    expiredSessionHandler() {
        console.log('User session error');
        setTimeout(() => {
            location.reload();
        }, 5000);
    };

    async secureFetch(url: string) {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set(
            'x-wp-nonce',
            document.querySelector(
                '#root'
            )!.getAttribute(
                'data-nonce'
            ) || ''
        );
        const response: Response = await fetch(
            this.API_ENDPOINT + url,
            {
                headers: requestHeaders,
            }
        );
        const parsedResponse: any = await response.json();
        if (parsedResponse!.session !== '1') {
            this.expiredSessionHandler();
            return false;
        }
        else {
            return parsedResponse!.data;
        }
    };
};

export default new Utils();
