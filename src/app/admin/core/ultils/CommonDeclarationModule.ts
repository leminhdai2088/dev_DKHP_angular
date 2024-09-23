import { CommonModule } from "@angular/common";
import * as ngCommon from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TopBarComponent } from "../../../share/layout/topbar.component";
import { ServiceProxyModule } from "../../../../shared/service-proxies/service-proxy.module";
import { TabMenuModule } from 'primeng/tabmenu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgxSpinnerModule } from "ngx-spinner";
import { CookieService } from "ngx-cookie-service";
import { AppRouteGuard } from "../../../share/common/auth/auth-route-guard";
export const commonDeclarationDeclarations = []
export const commonImportModule = [
    ButtonModule,
    TabMenuModule,
    DividerModule,
    InputTextModule,
    NgxSpinnerModule
]
@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ModalModule.forRoot(),
        commonImportModule
    ],
    declarations: [commonDeclarationDeclarations],
    exports: [commonDeclarationDeclarations],
    providers: [
        AppRouteGuard
    ]
}) export class CommonDeclarationDeclarationModule{}

@NgModule({
    imports: [
        ngCommon.CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        BsDropdownModule.forRoot(),
        ServiceProxyModule,
        commonImportModule,
        CommonDeclarationDeclarationModule
    ],
    declarations: [
        TopBarComponent,
    ],
    exports: [
        TopBarComponent
    ],
    providers: [
        CookieService
    ]
}) export class SideBarMenuModule { }
