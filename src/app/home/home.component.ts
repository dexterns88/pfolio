import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

// import animations
import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  // styleUrls: ['home.component.css'],
  animations: [
    trigger('pageAnimation', [

      transition(':enter', [

        query('.page-title', style({
          opacity: 0
        })),

        query('.projects .thumbnail', style({
          transform: 'translateX(100vw)',
          opacity: 0
        })),

        query('.projects .thumbnail, .page-title', [
          stagger(150, [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.projects .thumbnail', [
            stagger(150, [
              animate('550ms cubic-bezier(.91,-0.59,1,1)', style({
                transform: 'translateX(-100vw)',
                opacity: 0
              }))
            ])
          ]),
          query('.page-title', [
            stagger(150, [
              animate('550ms cubic-bezier(.91,-0.59,1,1)', style({
                opacity: 0
              }))
            ])
          ])
        ])
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  public projects;

  @HostBinding('@pageAnimation')
  public animatePage = true;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectService.getAll();

    // indexing data object
    for ( let i = 0; i < this.projects.length; i++ ) {
      this.projects[i]['index'] = i;
    }
  }
}
