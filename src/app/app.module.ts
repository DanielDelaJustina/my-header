import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, {injector});
    customElements.define('my-header', el);
  }

  ngDoBootstrap() { }
 }
