import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { appModuleAnimation } from "../../../shared/animations/routerTransition";

@Component({
    templateUrl: './class-edit.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [appModuleAnimation()]
})
export class ClassEditComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}