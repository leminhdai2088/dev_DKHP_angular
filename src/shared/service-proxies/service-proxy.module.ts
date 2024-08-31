import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';
//import { AppRoleService } from '@app/admin/zero-base/roles/app-role.service';

@NgModule({
    providers: [
        ApiServiceProxies.ClassSubjectServiceProxy,
        ApiServiceProxies.AuthServiceProxy,
        ApiServiceProxies.StudentServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        //{ provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule {}