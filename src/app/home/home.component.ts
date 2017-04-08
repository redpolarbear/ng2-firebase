import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { User } from '../auth/user';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<User> = [];
  currentUser: any;

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
    // console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user.uid);
      } else {
        // No user is signed in.
      }
    });
    
    firebase.database().ref('users').once('value')
      .then( snap => {
        // this.users = snap.val();
        this.users = Object.keys(snap.val()).map( key => snap.val()[key]);
        // console.log(this.users);
      })
      .catch((error) => {
        console.log(error.message);
      });

    
  }



}
