import { AfterViewInit, Component, Injector, OnInit, ViewEncapsulation } from "@angular/core";
import { appModuleAnimation } from "../../../shared/animations/routerTransition";

@Component({
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: [appModuleAnimation()]
})
export class DashboardComponent implements AfterViewInit, OnInit {
    constructor(
        injector: Injector
    ){
    }
    ngOnInit(): void {
        console.log("DashboardComponent");
        
    }
    ngAfterViewInit(): void {
        console.log("DashboardComponent");
    }
}