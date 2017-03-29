import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAgGi3fQAauSrzWYnJn92y7GwIifu5XRKw",
      authDomain: "bookstack-36bf1.firebaseapp.com",
      databaseURL: "https://bookstack-36bf1.firebaseio.com",
      storageBucket: "bookstack-36bf1.appspot.com",
      messagingSenderId: "385416323565"
    };
    firebase.initializeApp(config);
    
  }

}
