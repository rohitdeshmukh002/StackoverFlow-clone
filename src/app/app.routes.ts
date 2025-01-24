import { Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

export const routes: Routes = [
    {path:'header' , component:HeaderComponent},
    {
        path: 'header',
        component: SidebarComponent
    }
];
