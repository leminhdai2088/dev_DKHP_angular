import { Injector, Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
    templateUrl: './topbar.component.html',
    selector: 'topbar',
    encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent implements OnInit {
    constructor(){
        
    }
    ngOnInit(): void {
        console.log("TopBarComponent");
        
    }
    
}