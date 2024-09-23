import { NgModule } from "@angular/core";
import * as ngCommon from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RecaptchaModule } from "ng-recaptcha";
import { ModalModule } from "ngx-bootstrap/modal";
import { ServiceProxyModule } from "../shared/service-proxies/service-proxy.module";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./login/login.component";
import { commonImportModule } from "../app/admin/core/ultils/CommonDeclarationModule";
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from "./login/login.service";
import { TokenAuthServiceProxy } from "../shared/service-proxies/service-proxies";
@NgModule({
    imports: [
        ngCommon.CommonModule,
        FormsModule,
        // RecaptchaModule,
        ModalModule.forRoot(),
        ServiceProxyModule,
        AccountRoutingModule,
        // OAuthModule.forRoot()
        commonImportModule
    ],
    declarations: [
        AccountComponent,
        LoginComponent
    ],
    providers: [
        CookieService,
        LoginService,
        // AccountRouteGuard
    ]
})
export class AccountModule {}