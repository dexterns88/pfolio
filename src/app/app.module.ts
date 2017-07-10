import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// import services
import { ProjectsService } from './services/projects.service';
import { MailerService  } from './services/mailer/mailer.service';

// import component
import { ProjectsComponent } from './projects/projects.component';
import { DefaultComponent } from './default/default.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    DefaultComponent,
    NavigationComponent,
    ContactComponent,
    ProjectDetailComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProjectsService,
    MailerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
