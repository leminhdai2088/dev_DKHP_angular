import { Component, Inject, OnInit, Optional, ViewEncapsulation } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from "./login.service";
import { API_BASE_URL } from "../../shared/service-proxies/service-proxies";
// import { accountModuleAnimation } from '@shared/animations/routerTransition';
@Component({
    templateUrl: './login.component.html',
    // animations: [accountModuleAnimation()],
})
export class LoginComponent implements OnInit{
    submitting = false;
    inputValue: string | undefined;
    showPassword: boolean = false;
    private baseUrl!: string;
    constructor(
        private spinner: NgxSpinnerService,
        public loginService: LoginService,
        @Optional() @Inject(API_BASE_URL) baseUrl?: string
    ) {
        this.baseUrl = baseUrl ? baseUrl : "";
     }
    ngOnInit(): void {

    }
    login(): void {
        this.spinner.show();
        this.submitting = true;
        this.loginService.authenticate(
            () => {
                this.submitting = false;
                this.spinner.hide();
            }
        )
    }

}