import { NgModule } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { ClassListComponent } from "./class/class-list.component";
import { ClassEditComponent } from "./class/class-edit.component";
import { AppRouteGuard } from "../share/common/auth/auth-route-guard";

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: '',
                canActivate: [AppRouteGuard],
				canActivateChild: [AppRouteGuard],
                children: [
                    { path: 'class', component: ClassListComponent },
                    { path: 'class-add', component: ClassEditComponent },
                    { path: 'class-edit', component: ClassEditComponent },
                    { path: 'class-view', component: ClassEditComponent }
                ]
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