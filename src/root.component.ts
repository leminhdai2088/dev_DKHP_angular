import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    template:  `<router-outlet></router-outlet>`
})
export class RootComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig) {}
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.zIndex = {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlaypanel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
        };
        this.primengConfig.filterMatchModeOptions = {
            text: [FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
        };
    }
}
