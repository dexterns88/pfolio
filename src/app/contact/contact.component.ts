import {Component, HostBinding, OnInit} from '@angular/core';
import { MailerService } from '../services/mailer/mailer.service';
import {query, stagger, animate, style, transition, trigger, group} from '@angular/animations';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.panel', style({
          transform: 'scale(0)'
        })),
        query('.panel .form-group', style({
          transform: 'translateX(100vw)'
        })),

        query('.panel', [
          stagger(250, [
            animate('600ms cubic-bezier(0.35,0,.25,1)', style('*'))
          ])
        ]),
        query('.panel .form-group', [
          stagger(250, [
            animate('300ms cubic-bezier(0.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        query('.panel', [
          stagger(250, [
            animate('600ms cubic-bezier(0.35,0,.25,1)', style({
              transform: 'scale(0)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  @HostBinding('@pageAnimation')
  protected model: any = {};

  constructor(
    private mailer: MailerService
  ) {}

  ngOnInit() {}

  send() {
    this.mailer.sendMail(this.model).subscribe(
      data => {
        console.log( data );
      }
    );
  }
}
