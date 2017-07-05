import {Component, HostBinding, OnInit} from '@angular/core';

import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-default',
  templateUrl: 'default.component.html',
  styleUrls: ['default.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [

        query('.title', style({
          transform: 'translateX(100vw)'
        })),

        query('.image picture', style({
          transform: 'scale(0)'
        })),

        query('.image p, .help-nav', style({
          opacity: 0
        })),

        query('.title, .image picture', [
          stagger(150, [
            animate('800ms cubic-bezier(0,-0.01,.5,1.72)', style('*'))
          ])
        ]),

        query('.image p, .help-nav', [
          stagger(250, [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])

      ]),
      transition(':leave', [
        query('.image p, .help-nav', [
          stagger(250, [
            animate('800ms cubic-bezier(.35,0,.25,1)', style({
              opacity: 0
            }))
          ])
        ]),

        group([
          query('.title', [
            stagger(150, [
              animate('800ms cubic-bezier(.91,-0.59,1,1)', style({
                transform: 'translateX(-100vw)'
              }))
            ])
          ]),
          query('.image picture', [
            stagger(150, [
              animate('800ms cubic-bezier(.91,-0.59,1,1)', style({
                transform: 'scale(0)'
              }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class DefaultComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public title;

  constructor() { }

  ngOnInit() {

  }

}
