import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceProxyModule } from "./shared/service-proxies/service-proxy.module";
import { RootRoutingModule } from "./root-routing.module";
import { RootComponent } from "./root.component";
import { AppConsts } from "./shared/AppConsts";
import { API_BASE_URL } from "./shared/service-proxies/service-proxies";

export function getRemoteServiceBaseUrl(): string {
    return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //AppModule,
        ServiceProxyModule,
        RootRoutingModule
    ],
    declarations: [
        RootComponent,
    ],
    providers: [
        { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}