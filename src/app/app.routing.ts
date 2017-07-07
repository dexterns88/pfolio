import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component for routing
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DefaultComponent } from './default/default.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

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
    path: 'project/:id',
    component: ProjectDetailComponent,
    data: {
      animation: {
        value: 'project-detail'
      }
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
    path: 'contact',
    component: ContactComponent,
    data: {
      animation: {
        value: 'contact'
      },
      type: 'main-nav',
      navName: 'contact'
    }
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
