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

export const commonDeclarationDeclarations = []
@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ModalModule.forRoot(),
    ],
    declarations: [],
    exports: []
}) export class CommonDeclarationDeclarationModule{}

@NgModule({
    imports: [
        ngCommon.CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        BsDropdownModule.forRoot(),
        ServiceProxyModule,
        CommonDeclarationDeclarationModule
    ],
    declarations: [
        TopBarComponent,
    ],
    exports: [
        TopBarComponent
    ],
    providers: [
        
    ]
}) export class SideBarMenuModule { }