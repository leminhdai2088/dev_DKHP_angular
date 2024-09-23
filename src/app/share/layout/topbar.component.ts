import { Injector, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
    templateUrl: './topbar.component.html',
    selector: 'topbar',
    encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent implements OnInit {
    items: MenuItem[] = []
    activeItem: MenuItem | undefined
    constructor(){
        
    }
    ngOnInit(): void {
        this.items = [
            { label: 'DKHP-UIT', icon: 'pi pi-home' },
            { label: 'Đăng ký học phần', icon: 'pi pi-book' },
            { label: 'Đăng ký cứu xét', icon: 'pi pi-pencil' },
        ];
        this.activeItem = this.items[0];
    }
    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }
    
}