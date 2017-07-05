import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
  protected model: any = {};

  constructor() { }

  ngOnInit() {

  }

  send() {
    console.log( this.model );
  }
}
