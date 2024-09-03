import { NgModule } from "@angular/core";
import * as ngCommon from '@angular/common';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppRoutingModule } from "./app-routing.module";
import { SideBarMenuModule } from "./admin/core/ultils/CommonDeclarationModule";
import { DefaultLayoutComponent } from "./share/layout/themes/default/default-layout.component";
import { FooterComponent } from "./share/layout/footer.component";

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
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        SideBarMenuModule
    ],
    providers: [],

})
export class AppModule { }