import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ImportsModule } from 'src/app/imports';

interface Button {
  label: string;
  isActive: boolean;
}

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ImportsModule, ButtonModule, CommonModule, DividerModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})

export class ButtonsComponent {
  
  buttons: Button[] = [
    { label: 'North America', isActive: false },
    { label: 'South America', isActive: false },
    { label: 'Europe', isActive: false },
    { label: 'Africa', isActive: false },
    { label: 'Asia Pacific', isActive: false },
    { label: 'Middle East', isActive: false },
    { label: 'All Locales', isActive: false }
  ];

  setActive(clickedButton: Button) {
    this.buttons.forEach(function(button) {
      button.isActive = false;
    });
    clickedButton.isActive = true;
  }
}