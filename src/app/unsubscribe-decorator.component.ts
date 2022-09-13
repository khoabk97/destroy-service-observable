import { Component, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { HelperService } from './services/helper.service';
import { UnsubscribeObs } from './utils';

@Component({
  selector: 'app-unsubscribe-decorator',
  template: `
    <h2>Unsubscribe Decorator Component</h2>
  `,
  styles: [],
  providers: [HelperService],
})
@UnsubscribeObs()
export class UnsubscribeDecoratorComponent implements OnInit {
  public subscription!: Subscription;
  public otherSubscription!: Subscription;

  public vm$ = combineLatest({
    users: this._helper.users$,
    admins: this._helper.admins$,
  });

  constructor(private _helper: HelperService) {}

  ngOnInit(): void {
    this.subscription = this.vm$.subscribe(observer);

    this.otherSubscription = this.vm$.subscribe(observer);
  }
}

export const observer = {
  next: (val) => console.log(`next`),
  error: (err) => console.log(` ${err}`),
  complete: () => console.log(`complete`),
};
