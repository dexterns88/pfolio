import { trigger, style, group, animateChild, query, stagger, transition } from '@angular/animations';

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
      }), {optional: true}),

      query(':leave', group([
        animateChild()
      ]), {optional: true}),

      group([
        query(':enter', group([
          stagger(400, [
            animateChild()
          ])
        ]), {optional: true})
      ])
    ])
  ]);
}
