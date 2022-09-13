import { Component, OnInit } from '@angular/core';
import { combineLatest, finalize, of, switchMap, takeUntil } from 'rxjs';
import { HelperService } from './services/helper.service';
import { DestroyService } from './utils';

@Component({
  selector: 'app-destroy',
  template: `
    <h1>Destroy Normal</h1>

  `,
  styles: [],
  providers: [HelperService, DestroyService],
})
export class DestroyNormalComponet implements OnInit {
  public vm$ = combineLatest({
    users: this._helper.users$,
    admins: this._helper.admins$,
  });

  constructor(
    private _helper: HelperService,
    private _destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.vm$.pipe(takeUntil(this._destroy$)).subscribe(observer);
  }
}

export const observer = {
  next: (val) => console.log(`next`),
  error: (err) => console.log(` ${err}`),
  complete: () => console.log(`complete`),
};
