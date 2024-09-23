import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    templateUrl: './account.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit{
    ngOnInit(): void {
        console.log("AccountComponent");
        
    }
    
}