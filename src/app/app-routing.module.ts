import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookStackComponent } from './book-stack/book-stack.component';
import { FoodStackComponent } from './food-stack/food-stack.component';

// Guard
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bookstack',
    component: BookStackComponent
  },
  {
    path: 'foodstack',
    canActivate: [AuthGuard],
    component: FoodStackComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
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