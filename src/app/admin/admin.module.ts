import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonDeclarationDeclarationModule, commonImportModule } from "./core/ultils/CommonDeclarationModule";
import { ClassListComponent } from "./class/class-list.component";
import { ClassEditComponent } from "./class/class-edit.component";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        AdminRoutingModule,
        CommonDeclarationDeclarationModule,
        commonImportModule
    ],
    declarations:[
        ClassListComponent, ClassEditComponent
    ]
})
export class AdminModule { }