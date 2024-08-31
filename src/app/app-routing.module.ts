import { NgModule, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule, Scroll } from '@angular/router';
import { AppComponent } from './app.component';
//import { AppRouteGuard } from './shared/common/auth/auth-route-guard';
//import { NotificationsComponent } from './shared/layout/notifications/notifications.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'app',
                component: AppComponent,
                //canActivate: [AppRouteGuard],
                //canActivateChild: [AppRouteGuard],
                children: [
                    {
                        path: 'main',
                        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
                        data: { preload: true }
                    },
                    {
                        path: 'admin',
                        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
                        data: { preload: true },
                        // canLoad: [AppRouteGuard]
                    }, 
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    // constructor(
    //     private router: Router,
    //     private appRef: ApplicationRef
    // ) {
    //     router.events.subscribe((event) => {
    //         if (event instanceof RouteConfigLoadStart) {
    //             abp.ui.setBusy();
    //         }

    //         if (event instanceof RouteConfigLoadEnd) {
    //             // appRef.tick();
    //             abp.ui.clearBusy();
    //         }

    //         if (event instanceof NavigationEnd) {
    //             document.querySelector('meta[property=og\\:url').setAttribute('content', window.location.href);
    //             appRef.tick();
    //         }
    //     });
    // }
}