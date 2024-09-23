import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { ServiceProxyModule } from "./shared/service-proxies/service-proxy.module";
import { RootRoutingModule } from "./root-routing.module";
import { RootComponent } from "./root.component";
import { AppConsts } from "./shared/AppConsts";
import { API_BASE_URL } from "./shared/service-proxies/service-proxies";
import { AppModule } from "./app/app.module";
import { provideToastr, ToastrModule } from 'ngx-toastr';
export function getRemoteServiceBaseUrl(): string {
    return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ServiceProxyModule,
        RootRoutingModule,
        AppModule,
    ],
    declarations: [
        RootComponent,
    ],
    providers: [
        { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
        provideAnimations(),
        provideToastr()
    ],
    bootstrap: [RootComponent],
})
export class RootModule {}