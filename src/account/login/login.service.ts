import { Injectable, Type } from "@angular/core";
import { AuthenticateModel, AuthenticateResultModel, TL_USER_ENTITY, TokenAuthServiceProxy } from "../../shared/service-proxies/service-proxies";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { CookieService } from "ngx-cookie-service";
import { UrlHelper } from "../../shared/helpers/UrlHelper";
import { finalize } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { AppConsts } from "../../shared/AppConsts";
import { CommonHelper, ExceptionDto } from "../../shared/helpers/CommonHelper";
import { HttpHeaders } from "@angular/common/http";


@Injectable()
export class LoginService {

    static readonly twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';
    headers!: HttpHeaders
    authenticateModel!: AuthenticateModel;
    authenticateResult: AuthenticateResultModel | undefined;
    rememberMe!: boolean;
    constructor(
        public _spinner: NgxSpinnerService,
        public _tokenAuthService: TokenAuthServiceProxy,
        private _cookieService: CookieService,
        private _router: Router,
        private _toastr: ToastrService,
    ) {
        const token = this._cookieService.get(AppConsts.authorization.authTokenName);
        this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.clear();
    }

    private clear(): void {
        this.authenticateModel = new AuthenticateModel();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = undefined;
        this.rememberMe = false;
    }
    authenticate(finalCallback?: () => void, redirectUrl?: string): void {
        finalCallback = finalCallback || (() => {
            this._spinner.hide();
        });
        this.authenticateModel.twoFactorRememberClientToken = this._cookieService.get(LoginService.twoFactorRememberClientTokenName);
        this.authenticateModel.singleSignIn = UrlHelper.getSingleSignIn();
        this.authenticateModel.returnUrl = UrlHelper.getReturnUrl();

        this._tokenAuthService
            .login(this.authenticateModel)
            .pipe(finalize(finalCallback))
            .subscribe({
                next: (response) => {
                    this.processAuthenticateResult(response.result, redirectUrl);
                },
                error: (error) => {
                    let response = CommonHelper.ConvertResponseMessage(error.response);
                    this._toastr.error(response.erroR_MESSAGE, 'ERROR');
                    this._router.navigate(['account/login']);
                }
            });
    }
    processAuthenticateResult(authenticateResult: AuthenticateResultModel | any, redirectUrl?: string) {
        this.authenticateResult = authenticateResult;
        const userInput = authenticateResult.userLogin;
        userInput.id = authenticateResult.userId;

        if (authenticateResult.returnUrl && !redirectUrl) {
            redirectUrl = authenticateResult.returnUrl;
        }
        this.login(
            authenticateResult.accessToken,
            authenticateResult.expireInSeconds,
            this.rememberMe,
            authenticateResult.twoFactorRememberClientToken,
            redirectUrl
        );
    }
    private login(accessToken: string, expireInSeconds: number, rememberMe?: boolean, twoFactorRememberClientToken?: string, redirectUrl?: string): void {
        if (accessToken == ' ' || accessToken == '%20' || !(accessToken || '').trim()) {
            return;
        }
        let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;

        if ((accessToken).trim()) {
            this._cookieService.set(
                AppConsts.authorization.authTokenName,
                accessToken,
                tokenExpireDate,
            );
        }

        if (twoFactorRememberClientToken) {
            this._cookieService.set(
                LoginService.twoFactorRememberClientTokenName,
                twoFactorRememberClientToken,
                new Date(new Date().getTime() + 365 * 86400000), // 1 year
            );
        }

        // if (redirectUrl) {
        //     location.href = redirectUrl;
        // } else {
        //     let initialUrl = UrlHelper.initialUrl;

        //     if (initialUrl.indexOf('/account') > 0) {
        //         initialUrl = AppConsts.appBaseUrl;
        //     }
        //     location.href = initialUrl;
        // }
        this._router.navigate(['/']);
    }
}