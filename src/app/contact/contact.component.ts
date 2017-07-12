import { Component, HostBinding, OnInit } from '@angular/core';
import { MailerService } from '../services/mailer/mailer.service';
import { query, stagger, animate, style, transition, trigger } from '@angular/animations';
import { AlertService } from '../services/alert/alert.service';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.panel, .contact-head', style({
          transform: 'scale(0)'
        })),
        query('.panel .form-group', style({
          transform: 'translateX(100vw)'
        })),

        query('.panel, .contact-head', [
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
        query('.panel, .contact-head', [
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
    private mailer: MailerService,
    private alert: AlertService
  ) {}

  ngOnInit() {}

  send(form: NgForm) {

    this.mailer.sendMail(this.model).subscribe(
      data => {
        // success status and error
        if ( data.status === 200 ) {
          this.alert.success(data.status_message, true);
          form.resetForm();
        } else if ( data.status === 400 ) {
          this.alert.error(data.status_message, true);
        }
      }, error => {
        const msg = JSON.parse(error._body);
        this.alert.error( msg );
      }
    );
  }
}
