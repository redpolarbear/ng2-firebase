import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAF4XeoyoKOfwqcZyATfrzvK9pnEEp4v_I",
      authDomain: "clock-in-dev.firebaseapp.com",
      databaseURL: "https://clock-in-dev.firebaseio.com",
      projectId: "clock-in-dev",
      storageBucket: "clock-in-dev.appspot.com",
      messagingSenderId: "290948925717"
    };
    firebase.initializeApp(config);
  }

}
