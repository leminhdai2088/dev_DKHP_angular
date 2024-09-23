export class UrlHelper {
    /**
     * The URL requested, before initial routing.
     */
    static readonly initialUrl = location.href;

    static getQueryParameters(): any {
        return UrlHelper.getQueryParametersUsingParameters(document.location.search);
    }

    static getQueryParametersUsingParameters(search: string): any {
        const params: any = {};
        search.replace(/(^\?)/, '')
              .split('&')
              .forEach(param => {
                  const [key, value] = param.split('=');
                  params[key] = value;
              });
        return params;
    }

    static getQueryParametersUsingHash(): any {
        const hash = document.location.hash.substr(1);
        const params: any = {};
        hash.replace(/(^\?)/, '')
            .split('&')
            .forEach(param => {
                const [key, value] = param.split('=');
                params[key] = value;
            });
        return params;
    }

    static getInitialUrlParameters(): string {
        let questionMarkIndex = UrlHelper.initialUrl.indexOf('?');
        if (questionMarkIndex >= 0) {
            return UrlHelper.initialUrl.substr(questionMarkIndex);
        }

        return '';
    }

    static getReturnUrl(): string | undefined {
        const queryStringObj = UrlHelper.getQueryParametersUsingParameters(UrlHelper.getInitialUrlParameters());
        if (queryStringObj.returnUrl) {
            return decodeURIComponent(queryStringObj.returnUrl);
        }

        return undefined;
    }

    static getSingleSignIn(): boolean {
        const queryStringObj = UrlHelper.getQueryParametersUsingParameters(UrlHelper.getInitialUrlParameters());
        if (queryStringObj.ss) {
            return queryStringObj.ss === 'true';
        }

        return false;
    }

    static isInstallUrl(url: string): boolean {
        return (url && url.indexOf('app/admin/install') >= 0) as boolean;
    }
}
