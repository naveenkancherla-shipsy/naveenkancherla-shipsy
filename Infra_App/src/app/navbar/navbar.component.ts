import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImportsModule,AvatarModule, BadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() title: string = '';
  @Input() value: number = 0;

  constructor() {}
}
