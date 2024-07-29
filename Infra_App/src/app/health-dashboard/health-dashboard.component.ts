import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';
import { ImportsModule } from '../imports';
//import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-health-dashboard',
  standalone: true,
  imports: [PagesComponent,ImportsModule, NavbarComponent],
  templateUrl: './health-dashboard.component.html',
  styleUrl: './health-dashboard.component.scss'
})
export class HealthDashboardComponent {

}
