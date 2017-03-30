import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

// Interface - Model
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private fireAuth: any;
  private isLoggedIn: boolean = false;

  constructor() {
    this.fireAuth = firebase.auth();
  }

  onAuthState(): any {
    return new Promise( (resolve) => {
      this.fireAuth.onAuthStateChanged( (user) => {
        if (user) {
          // User is signed in.
          this.isLoggedIn = true;
          return resolve(user);
        } else {
          // No user is signed in.
          this.isLoggedIn = false;
        }
      })
    })
  }

  signUp(user: User) {
    return new Promise ( (resolve) => {
      this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then( (user) => {
        if (user) {
          this.isLoggedIn = true;
          return resolve(user);
        } else {
          this.isLoggedIn = false;
        }
      })
    })
  };

}
