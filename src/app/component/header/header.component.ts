import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../service/shared.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    searchQuery: string = '';
    isDropdownOpen = false;
    isSidebarOpen: boolean = false;
    

    sharedService = inject(SharedService)


    toggleSearchBar() {
        console.log("clicked");
        this.sharedService.issearchbaropen = !this.sharedService.issearchbaropen;
    }

    toggleSidebar() {
        this.sharedService.isSidebarVisible = !this.sharedService.isSidebarVisible;
    }

    onSearch() {
        console.log(this.searchQuery); // Replace with your filtering or search logic
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}
