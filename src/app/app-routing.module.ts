import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookStackComponent } from './book-stack/book-stack.component';
import { FoodStackComponent } from './food-stack/food-stack.component';

const appRoutes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent 
  }, {
    path: 'login',
    component: LoginComponent
  },{
    path: 'bookstack',
    component: BookStackComponent
  }, {
    path: 'foodstack',
    component: FoodStackComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

// export const AppRouting = RouterModule.forRoot(appRoutes);
export class AppRoutingModule { };