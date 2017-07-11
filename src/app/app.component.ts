import { Component } from '@angular/core';

import { routerAnimation } from './_animations/animations';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerAnimation()]
})

export class AppComponent {
  title = 'dexDev ';

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
