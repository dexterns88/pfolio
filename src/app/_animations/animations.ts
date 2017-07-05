import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export function routerAnimation() {
  return routeAnim();
}

function routeAnim() {
  return trigger('routerAnimations', [

    // router navigation is here global
    transition('* => *', [
      query(':enter', style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      })),

      query(':leave', group([
        animateChild()
      ])),

      group([
        query(':enter', group([
          stagger(400, [
            animateChild()
          ])
        ]))
      ])
    ])
  ]);
}
