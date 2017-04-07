import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../providers/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let url: string = state.url;
      return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    return this.authService.onAuthState()
      .then( (uid) => {
        if (uid) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
  }
}
