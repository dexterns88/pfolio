import {Component, OnInit, HostBinding, setTestabilityGetter} from '@angular/core';

import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('pageAnimation', [

      transition(':enter', [
        query('.anim-segment', style({
          opacity: 0
        })),

        query('.image-wrapper', style({
          transform: 'scale(0) rotate(720deg)',
        })),

        group([
          query('.anim-segment', [
            stagger(250, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ]),
          query('.image-wrapper', [
            stagger(250, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ])

      ]),
      transition(':leave', [
        group([
          query('.anim-segment', [
            stagger(150, [
              animate('550ms cubic-bezier(.35,0,.25,1)', style({
                opacity: 0
              }))
            ])
          ]),
          query('.image-wrapper', [
            stagger(150, [
              animate('550ms cubic-bezier(.35,0,.25,1)', style({
                transform: 'scale(0) rotate(-720deg)'
              }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
