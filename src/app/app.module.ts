import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllergenesComponent } from './allergenes/allergenes.component';
import { AllergeneComponent } from './allergene/allergene.component';

@NgModule({
  declarations: [
    AppComponent,
    AllergenesComponent,
    AllergeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AllergenesComponent]
})
export class AppModule { }
