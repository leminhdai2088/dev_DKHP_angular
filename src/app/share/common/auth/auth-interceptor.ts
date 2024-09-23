import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { AppConsts } from "../../../../shared/AppConsts";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token!: string;
    constructor(
        private _cookieService: CookieService
    ){
        this.token = this._cookieService.get(AppConsts.authorization.authTokenName);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`tokennnn: ${this.token}`);
        if(this.token){
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.token}`)
            });
            // transfer cloned request with token to next handler
            return next.handle(cloneReq);
        }
        // if not include token -> send original req
        return next.handle(req);
    }
    
}