import { isDevMode } from '@angular/core';
import { Subscription } from 'rxjs';

export function UnsubscribeObs(): ClassDecorator {
  return function (targetClass: Function) {
    const originalDestroyFn = targetClass.prototype.ngOnDestroy;

    targetClass.prototype.ngOnDestroy = function (...args: any[]) {
      for (const prop in this) {
        const property = this[prop];
        if (property instanceof Subscription) {
          property.unsubscribe();
          if (isDevMode()) {
            console.log(`%cUnsubscribed from ${prop}`, 'color: red');
          }
        }
      }
      if (originalDestroyFn) {
        originalDestroyFn.apply(this, args);
      }
    };
  };
}
