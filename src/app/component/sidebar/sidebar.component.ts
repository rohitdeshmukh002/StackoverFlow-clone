import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public sharedService = inject(SharedService);

}
