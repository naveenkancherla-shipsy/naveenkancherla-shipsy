import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'app-active-issues-table',
  standalone: true,
  imports: [TableModule, ImportsModule],
  templateUrl: './active-issues-table.component.html',
  styleUrl: './active-issues-table.component.scss'
})
export class ActiveIssuesTableComponent {
  activeIssues = [
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 3, avgResponseTime: 120 },
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 5, avgResponseTime: 150 },
    { name: 'Issue 3', errorPercentage: 2, avgResponseTime: 100 },
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 4, avgResponseTime: 130 },
    { name: 'Issue 5', errorPercentage: 6, avgResponseTime: 160 },
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 1, avgResponseTime: 110 },
    { name: 'Issue 7', errorPercentage: 7, avgResponseTime: 170 },
    { name: 'Issue 8', errorPercentage: 8, avgResponseTime: 180 },
    { name: 'Issue 9', errorPercentage: 2, avgResponseTime: 140 },
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 3, avgResponseTime: 150 },
    { name: 'Active Issue name lorem ipsum dolor sit amet eu fugiat nulla pariatur aute irure', errorPercentage: 1, avgResponseTime: 110 },
    { name: 'Issue 7', errorPercentage: 7, avgResponseTime: 170 },
    { name: 'Issue 8', errorPercentage: 8, avgResponseTime: 180 }
  ];

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
