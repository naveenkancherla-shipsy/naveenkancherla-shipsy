import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ImportsModule } from 'src/app/imports';

interface Service {
  name: string;
  tags: string[];
  status: number;
  errorPercentage: number;
  avgResponseTime: number;
  displayedTags?: string[];
  moreTagCount?: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ProgressBarModule, TagModule, TableModule, DropdownModule, ButtonModule, 
    CommonModule,
    TooltipModule,
    ImportsModule
  ],
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.scss'
})
export class TableComponent implements OnInit, OnChanges {

  @Input() services: Service[] = [
    {
      name: 'Servicename lorem ipsum dolor sit amet',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 6,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename lorem aute irure dolor in reprehenderit',
      tags: ['Tag101010', 'Tag110101'],
      status: 46,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename Idoloe eu fugiat nulla pariatur',
      tags: ['Tag101010', 'Tag110101'],
      status: 86,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename mollit anim id est laborum',
      tags: ['Tag101010'],
      status: 66,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename irure dolor in reprehenderit amet',
      tags: ['Tag101010', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename lorem incididunt ut labore et dolore',
      tags: ['Tag101010', 'Tag110101', 'Tag110101','Tag110101','Tag110101','Tag110101','Tag110101'],
      status: 56,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename lorem velit esse cillum dolore eu',
      tags: ['Tag101010', 'Tag110101', 'Tag110101','Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename reprehenderit in voluptate',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 46,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename eu fugiat nulla pariatur',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename incididunt ut labore dolore amet',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename sed do eiusmod tempor incididunt',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename ut enim ad minim veniam',
      tags: ['Tag101010', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename quis nostrud exercitation',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename ullamco laboris nisi ut aliquip',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename ex ea commodo consequat',
      tags: ['Tag101010', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename duis aute irure dolor in reprehenderit',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename voluptate velit esse cillum dolore',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename fugiat nulla pariatur',
      tags: ['Tag101010', 'Tag110101', 'Tag110101', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename excepteur sint occaecat cupidatat',
      tags: ['Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    },
    {
      name: 'Servicename non proident, sunt in culpa qui',
      tags: ['Tag101010', 'Tag110101', 'Tag110101','Tag101010', 'Tag110101', 'Tag110101'],
      status: 96,
      errorPercentage: 4,
      avgResponseTime: 535
    }
  ];
  
  boxes: any[] = [];
  
  totalRecords: number = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateTags();
    this.totalRecords = this.services.length;
   
    const jsonData = [
      { hour: 1, status: true},
      { hour: 2, status: false },
      { hour: 3, status: true },
      { hour: 4, status: true },
      { hour: 5, status: true },
      { hour: 6, status: true },
      { hour: 7, status: true },
      { hour: 8, status: true },
      { hour: 9, status: true },
      { hour: 10, status: true },
      { hour: 11, status: true },
      { hour: 12, status: true },
      { hour: 13, status: true },
      { hour: 14, status: null },
      { hour: 15, status: null },
      { hour: 16, status: false },
      { hour: 17, status: true },
      { hour: 18, status: true },
      { hour: 19, status: true },
      { hour: 20, status: null },
      { hour: 21, status: null },
      { hour: 22, status: null },
      { hour: 23, status: null },
      { hour: 24, status: null }
    ];

    this.boxes = jsonData.map(box => ({
      color: this.getColorForStatus(box.status),
      tooltipContent: this.getTooltipForStatus(box.status, box.hour)
    }));
  }

  getColorForStatus(status: boolean | null): string {
    if (status === true) {
      return '#20B249';
    } else if (status === false) {
      return '#D40B00';
    } else {
      return 'white';
    }
  }

  getTooltipForStatus(status: boolean | null, hour: number): string {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${hour}:00`;

    if (status === true) {
      return `
          Full Hour worked
          Date: ${formattedDate}
          Good Job!
      `;
    } else if (status === false) {
      return `
          Work Hour Missed
          Date: ${formattedDate}
          Work properly
      `;
    } else {
      return `
          Not Available
          Date: ${formattedDate}
          Attend Regularly
      `;
    }
}

tooltipContent(box: any): string {
  return this.getTooltipForStatus(box.status, box.hour);
}

//tooltip custom


  ngOnChanges(changes: SimpleChanges) {
    if (changes['services']) {
      this.updateTags();
      this.totalRecords = this.services.length;
    }
  }

  private updateTags() {
    this.services.forEach(service => {
      const tagCount = service.tags.length;
      if (tagCount > 3) {
        service.displayedTags = service.tags.slice(0, 3);
        service.moreTagCount = tagCount - 3;
      } else {
        service.displayedTags = service.tags;
        service.moreTagCount = 0;
      }
    });
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