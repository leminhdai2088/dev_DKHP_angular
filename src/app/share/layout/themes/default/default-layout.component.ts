import { Injector, ElementRef, Component, OnInit, AfterViewInit, ViewChild, HostBinding, NO_ERRORS_SCHEMA } from '@angular/core';
import { appModuleAnimation } from '../../../../../shared/animations/routerTransition';
@Component({
    templateUrl: './default-layout.component.html',
    selector: 'default-layout',
    animations: [appModuleAnimation()],
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit{

    constructor(){
        
    }

    ngAfterViewInit(): void {
        console.log("DefaultLayoutComponent");
    }
    ngOnInit(): void {
        console.log("DefaultLayoutComponent");
    }
    
}