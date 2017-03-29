import { RouterModule, Routes } from '@angular/router';

// Component
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent 
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);



