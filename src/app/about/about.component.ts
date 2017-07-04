import {Component, OnInit, HostBinding, setTestabilityGetter} from '@angular/core';

import {query, stagger, animate, style, transition, trigger} from '@angular/animations';

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

        query('.anim-segment', [
          stagger(250, [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        query('.anim-segment', [
          stagger(150, [
            animate('550ms cubic-bezier(.35,0,.25,1)', style({
              opacity: 0
            }))
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
