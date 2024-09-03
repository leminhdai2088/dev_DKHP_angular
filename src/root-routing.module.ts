import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/app/main/dashboard', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule), //Lazy load account module
        data: { preload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }