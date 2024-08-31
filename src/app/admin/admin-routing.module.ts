import { NgModule } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";

@NgModule({
    imports:[
        RouterModule.forChild([
            {

            }
        ])
    ]
})
export class AdminRoutingModule{
    constructor(private router: Router){
        router.events.subscribe(e => {
            if(e instanceof NavigationEnd)
                window.scroll(0, 0);
        })
    }
}