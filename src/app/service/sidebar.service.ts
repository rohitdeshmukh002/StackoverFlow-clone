import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibilityChange = this.sidebarVisibilitySubject.asObservable();

  // Method to toggle sidebar visibility
  toggleSidebar(isVisible: boolean) {
    this.sidebarVisibilitySubject.next(isVisible);
  }
}
