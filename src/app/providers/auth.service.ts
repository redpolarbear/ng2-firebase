import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as md5 from 'md5';
import * as _ from 'lodash';

// Interface - Model
import { User } from '../auth/user';

@Injectable()
export class AuthService {
  private fireAuth: any;
  private fireDb: any;
  private fireUserRef: any;
  private LoggedIn: boolean = false;

  constructor() {
    this.fireAuth = firebase.auth();
    this.fireDb = firebase.database();
    this.fireUserRef = this.fireDb.ref('users/');

    this.LoggedIn = !!this.fireAuth.currentUser;

  }

  onAuthState(): any{
    return new Promise( (resolve, reject) => {
      let uid: string;
      return this.fireAuth.onAuthStateChanged( (user) => {
        if (user) {
          // User is signed in.
          this.LoggedIn = true;
          resolve(user.uid);
        } else {
          // No user is signed in.
          this.LoggedIn = false;
          resolve();
        }
      })
    })
  }

  signUp(formValues: any) {
    return new Promise ( (resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then( (newUser) => {
        if (newUser) {
          this.LoggedIn = true;
          return this.writeUserData(formValues, newUser.uid);
        }
      })
      .then( () => {
        resolve('signup successfully');
      })
      .catch ((error) => {
        reject(error);
      })
    })
  };

  writeUserData(formValues: any, uid: string) {
    let user: User = {
      uid: uid,
      email: formValues.email.toLowerCase().trim(),
      profile: {
        name: {
          first: formValues.first.trim(),
          last: formValues.last.trim()
        },
        photoURL: 'https://www.gravatar.com/avatar/' + md5(formValues.email.toLowerCase()) + '?default=mm&s=256'
      },
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    }
    return this.fireUserRef.child(user.uid).update(user);
  }

  login(formValues: any) {
    return new Promise ( (resolve, reject) => {
      let uid: string;
      this.fireAuth.signInWithEmailAndPassword(formValues.email, formValues.password)
        .then( (currentUser) => {
          if (!!currentUser) {
            this.LoggedIn = true;
            uid = currentUser.uid;
            return this.findUserById(uid)
          }
        })
        .then( (snap) => {
          resolve(snap.val()[uid]);
        })
        .catch ((error) => {
          reject(error);
        })
    })
  }

  logout() {
    return new Promise ( (resolve, reject) => {
      this.fireAuth.signOut()
        .then( () => {
          this.LoggedIn = false;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    })
  }

  getCurrentUser() {
    return new Promise( (resolve, reject) => {
      if (!!this.fireAuth.currentUser) {
        const uid = this.fireAuth.currentUser.uid;
        this.findUserById(uid)
          .then( (snap) => {
            resolve(snap.val()[uid]);
          })
          .catch( (error) => {
            reject(error);
          })
      }
    })
  }

  findUserById(uid: string) {
    return this.fireUserRef.orderByKey().equalTo(uid).once('value');
  }

  isLoggedIn() {
    return this.LoggedIn;
  }

}
