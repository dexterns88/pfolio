import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  protected routers = [];

  constructor( private router: Router) { }

  ngOnInit() {

    const routerItem = this.router.config;
    for ( let i = 0; i < routerItem.length; i++ ) {
      if ( routerItem[i].data && routerItem[i].data.type === 'main-nav' ) {
        this.routers.push( routerItem[i] );
      }
    }
  }
}
