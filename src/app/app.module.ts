import { NgModule } from "@angular/core";
import * as ngCommon from '@angular/common';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppRoutingModule } from "./app-routing.module";
import { CommonDeclarationDeclarationModule, SideBarMenuModule } from "./admin/core/ultils/CommonDeclarationModule";
import { DefaultLayoutComponent } from "./share/layout/themes/default/default-layout.component";
import { FooterComponent } from "./share/layout/footer.component";
import { ServiceProxyModule } from "../shared/service-proxies/service-proxy.module";
import { LoginService } from "../account/login/login.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from "./share/common/auth/auth-interceptor";
@NgModule({
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
        FooterComponent
    ],
    imports: [
        ngCommon.CommonModule,
        
        FormsModule,
        ModalModule.forRoot(),
        HttpClientModule,
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        ServiceProxyModule,
        CommonDeclarationDeclarationModule,
        SideBarMenuModule,
    ],
    providers: [
        LoginService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],

})
export class AppModule { }