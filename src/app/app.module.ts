import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import _ from 'lodash';

// Component
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

// Service
import { FirebaseService } from './services/firebase.service';

let components = [
  AppComponent,
  SignupComponent
];

let pipes = [];

export function declarations() {
  return _.concat(components, pipes);
}

export function entryComponents() {
  return components;
}

export function providers() {
  return [
    FirebaseService
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: providers(),
  entryComponents: entryComponents(),
  bootstrap: [AppComponent]
})
export class AppModule { }
