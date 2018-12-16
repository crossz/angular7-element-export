import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { JsaCounterComponent } from './jsa-counter/jsa-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    JsaCounterComponent
  ],
  entryComponents: [
    JsaCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(JsaCounterComponent, { injector: this.injector });
    customElements.define('jsa-counter', element);
  }
}
