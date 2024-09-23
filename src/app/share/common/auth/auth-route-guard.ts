import { Inject, Injectable, Optional } from "@angular/core";
import { CanActivate, CanActivateChild, Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../../../account/login/login.service";
import { API_BASE_URL, BaseServiceProxy, TL_USER_ENTITY } from "../../../../shared/service-proxies/service-proxies";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { AppConsts } from "../../../../shared/AppConsts";
import { map, Observable } from "rxjs";

@Injectable() export class AppRouteGuard implements CanActivate, CanActivateChild {
    headers!: HttpHeaders;
    constructor(
        private _router: Router,
        private _activeRoute: ActivatedRoute,
        private _loginService: LoginService,
        private _baseAppService: BaseServiceProxy,
        @Optional() @Inject(API_BASE_URL) baseUrl?: string
    ) {
    }
    canActivateInternal(): Observable<boolean> {
        return this._baseAppService.getCurrentUser()
            .pipe(
                map(response => {
                    const currentUser = response.result;
                    console.log(currentUser);
                    if (!currentUser) {
                        this._router.navigate(['/account/login']);
                        return false;
                    }
                    return true;
                })
            );
    }
    getRouteParam(key: string): any {
        return (this._activeRoute.params as any).value[key];
    }
    canActivate(): Observable<boolean> {
        return this.canActivateInternal();
    }
    canActivateChild(): Observable<boolean> {
        return this.canActivate();
    }

}