import {Component, HostBinding, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';
import { ProjectsService } from '../services/projects.service';

declare const $: any;

@Component({
  moduleId: module.id,
  selector: 'app-project-detail',
  templateUrl: 'project-detail.component.html',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.project-title, .sub-title, .bs-callout, .project-link, .technology, .images', style({
          opacity: 0
        })),

        query('.project-title, .sub-title, .bs-callout, .project-link, .technology, .images', [
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
          ], {optional: true}),
          query('.images', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(100vw)'
              }))
            ])
          ], {optional: true})
        ]),

        query('.project-link', [
          stagger(150, [
            animate('350ms cubic-bezier(.35,0,.25,1)', style({
              transform: 'translateX(-100vw)'
            }))
          ])
        ], {optional: true}),
        group([
          query('.project-title, .sub-title', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(100vw)'
              }))
            ])
          ], {optional: true}),
          query('.bs-callout', [
            stagger(150, [
              animate('350ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'translateX(-100vw)'
              }))
            ])
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {

    $('.well.images').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: { enabled: true },
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }

    });

    // $(document).ready(function(){
    //   $('p').css('backgroundColor', 'red');
    // });
  }
}
