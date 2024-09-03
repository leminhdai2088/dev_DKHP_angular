import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log("Init");
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    
  }
}