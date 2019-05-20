import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Template Forms
// import { FormsModule } from '@angular/forms';
// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/**
 * Angular AppModule
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
