import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DestroyDecoratorComponent } from './destroy-decorator.component';
import { DestroyNormalComponet } from './destroy-normal.component';
import { UnsubscribeDecoratorComponent } from './unsubscribe-decorator.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  AppComponent,
  DestroyDecoratorComponent,
  DestroyNormalComponet,
  UnsubscribeDecoratorComponent,
];

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [...COMPONENTS],
  bootstrap: [AppComponent],
})
export class AppModule {}
