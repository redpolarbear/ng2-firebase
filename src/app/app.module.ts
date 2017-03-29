import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import _ from 'lodash';

// Component
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Service
import { FirebaseService } from './services/firebase.service';

// Routing
import { AppRouting } from './app-routing.module';

let components = [
  AppComponent,
  SignupComponent,
  LoginComponent,
  PageNotFoundComponent
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
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: providers(),
  // entryComponents: entryComponents(),
  bootstrap: [AppComponent]
})
export class AppModule { }
