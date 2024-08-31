import { AfterViewInit, Injector } from "@angular/core";

export class DashboardComponent implements AfterViewInit{
    constructor(
        injector: Injector
    ){
    }
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }
}