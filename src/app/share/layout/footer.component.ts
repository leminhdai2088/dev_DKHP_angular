import { Injector, Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
    templateUrl: './footer.component.html',
    selector: 'footer-bar',
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    constructor(){
        
    }
    ngOnInit(): void {
        console.log("FooterComponent");
        
    }
    
}