import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import _ from 'lodash';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookStackComponent } from './book-stack/book-stack.component';
import { FoodStackComponent } from './food-stack/food-stack.component';

// Service
import { FirebaseService } from './providers/firebase.service';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './auth/auth.guard';

// Routing
import { AppRoutingModule } from './app-routing.module';

let components = [
  AppComponent,
  HomeComponent,
  BookStackComponent,
  FoodStackComponent,
  LoginComponent,
  PageNotFoundComponent,
  SignupComponent
];

let pipes = [];

export function declarations() {
  return _.concat(components, pipes);
}

// export function entryComponents() {
//   return components;
// }

export function providers() {
  return [
    AuthService,
    FirebaseService,
    AuthGuard
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: providers(),
  // entryComponents: entryComponents(),
  bootstrap: [AppComponent]
})
export class AppModule { }
