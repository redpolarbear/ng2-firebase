import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }

}
