import {Component, HostBinding, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';

import { ProjectsService } from '../services/projects.service';

@Component({
  moduleId: module.id,
  selector: 'app-project-detail',
  templateUrl: 'project-detail.component.html',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.project-title, .bs-callout, .project-link, .technology, .images', style({
          opacity: 0
        })),

        query('.project-title, .bs-callout, .project-link, .technology, .images', [
          stagger(250, [
            animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),

      transition(':leave', [

        group([
          query('.technology', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(-100vw)'
              }))
            ])
          ]),
          query('.images', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(100vw)'
              }))
            ])
          ])
        ]),

        query('.project-link', [
          stagger(150, [
            animate('350ms cubic-bezier(.35,0,.25,1)', style({
              transform: 'translateX(-100vw)'
            }))
          ])
        ]),
        group([
          query('.project-title', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(100vw)'
              }))
            ])
          ]),
          query('.bs-callout', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(-100vw)'
              }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class ProjectDetailComponent implements OnInit {
  @HostBinding('@pageAnimation')
  private uid: number;
  public project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectS: ProjectsService
  ) {}

  ngOnInit() {
    this.uid = +this.route.snapshot.params['id'];
    this.project = this.projectS.getItem(this.uid);
  }
}
