import { trigger, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export function routerAnimation() {
  return routeAnim();
}

function routeAnim() {
  return trigger('routerAnimations', [

    // router navigation is here global
    transition('* => *', [

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
