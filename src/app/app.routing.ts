import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component for routing
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DefaultComponent } from './default/default.component';

import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full'
  },
  {
    path: 'project',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home'
      },
      type: 'main-nav',
      navName: 'project'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: {
        value: 'about'
      },
      type: 'main-nav',
      navName: 'about'
    }
  },
  {
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: '**',
    component: DefaultComponent,
    data: {
      animation: {
        value: 'default'
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
