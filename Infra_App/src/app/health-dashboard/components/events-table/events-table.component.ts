import { Component } from '@angular/core';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ImportsModule } from 'src/app/imports';
@Component({
  selector: 'app-service-table',
  standalone: true,
  imports: [FormsModule, CheckboxModule, CommonModule, TableModule, ImportsModule],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss'
})
export class ServiceTableComponent {
  allSelected: boolean = false;
  
  events = [
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 2',
      region: 'Region 2',
      createdAt: new Date('2024-02-10T10:00:00'),
      lastModifiedAt: new Date('2024-02-15T14:30:00'),
      selected: false
    },
    {
      name: 'Event 3',
      region: 'Region 3',
      createdAt: new Date('2024-03-05T08:15:00'),
      lastModifiedAt: new Date('2024-03-10T16:00:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
    {
      name: 'Event 1',
      region: 'Region 1',
      createdAt: new Date('2024-01-15T09:30:00'),
      lastModifiedAt: new Date('2024-01-20T12:45:00'),
      selected: false
    },
  ];

  toggleAll(event: any) {
    const checked = event.checked;
    this.events.forEach(e => e.selected = checked);
  }

  first = 0;

    rows = 10;


    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
