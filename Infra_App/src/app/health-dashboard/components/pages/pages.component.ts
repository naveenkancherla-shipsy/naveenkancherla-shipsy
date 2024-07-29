import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { ButtonsComponent } from '../buttons/buttons.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { TableComponent } from '../service-table/service-table.component';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { ServiceTableComponent } from '../events-table/events-table.component';
import { ActiveIssuesTableComponent } from '../active-issues-table/active-issues-table.component';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu'; 
import { DividerModule } from 'primeng/divider'; 
import { ButtonModule } from 'primeng/button'; 
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    ImportsModule,
    ButtonModule,
    CommonModule,
    ToolbarModule,
    DividerModule,
    TabMenuModule,
    ServiceTableComponent, 
    InputGroupModule, 
    TabViewModule, 
    ButtonsComponent, 
    DropdownComponent, 
    CalendarModule,
    HttpClientModule, 
    FormsModule, 
    DropdownModule, 
    TableComponent, 
    InputGroupAddonModule,
    ActiveIssuesTableComponent
  ],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'] // Fixed from styleUrl to styleUrls
})

export class PagesComponent implements OnInit {
  
  date: Date;
  formattedDate: string;
  
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;
  
  ngOnInit() {
    // Set default date to today
    this.date = new Date();
    this.updateFormattedDate(this.date);

    // Initialize tab menu items
    this.items = [
      { label: 'Services', command: () => this.setActiveTab(this.items![0]) },
      { label: 'Events', command: () => this.setActiveTab(this.items![1]) },
      { label: 'Active Issues', command: () => this.setActiveTab(this.items![2]) },
    ];
    this.activeItem = this.items[0];
  }

  setActiveTab(item: MenuItem) {
    this.activeItem = item;
  }

  onDateChange(event: any) {
    this.updateFormattedDate(event.value); // Correct event property
  }

  updateFormattedDate(date: Date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' } as const;
    this.formattedDate = `${date.toLocaleDateString('en-US', options)} (Today)`;
  }
}
