import { bootstrapApplication } from '@angular/platform-browser';
import { HealthDashboardComponent } from './app/health-dashboard/health-dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(HealthDashboardComponent, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));