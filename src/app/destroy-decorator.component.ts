import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { HelperService } from './services/helper.service';
import { Destroy, autoDestroy } from './utils';

@Component({
  selector: 'app-destroy-decorator',
  template: `
    <h2>Destroy Decorator</h2>
  `,
  styles: [],
  providers: [HelperService],
})
@Destroy()
export class DestroyDecoratorComponent implements OnInit {
  public vm$ = combineLatest({
    users: this._helper.users$,
    admins: this._helper.admins$,
  }).pipe(autoDestroy(this));

  constructor(private _helper: HelperService) {}

  ngOnInit(): void {
    this.vm$.subscribe(observer);

    this.vm$.subscribe(observer);
  }
}

export const observer = {
  next: (val) => console.log(`next`),
  error: (err) => console.log(` ${err}`),
  complete: () => console.log(`complete`),
};
