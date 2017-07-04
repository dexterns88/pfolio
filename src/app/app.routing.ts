import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component for routing
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home'
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: {
        value: 'about'
      }
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {}
