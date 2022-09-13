import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public isToggle: boolean = true;

  public toggle(): void {
    this.isToggle = !this.isToggle;
  }
}
