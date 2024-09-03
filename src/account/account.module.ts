import { NgModule } from "@angular/core";
import * as ngCommon from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RecaptchaModule } from "ng-recaptcha";
import { ModalModule } from "ngx-bootstrap/modal";
import { ServiceProxyModule } from "../shared/service-proxies/service-proxy.module";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./login/login.component";
@NgModule({
    imports: [
        ngCommon.CommonModule,
        FormsModule,
        // RecaptchaModule,
        ModalModule.forRoot(),
        ServiceProxyModule,
        AccountRoutingModule,
        // OAuthModule.forRoot()
    ],
    declarations: [
        AccountComponent,
        LoginComponent
    ],
    providers: [
        // LoginService,
        // AccountRouteGuard
    ]
})
export class AccountModule {}