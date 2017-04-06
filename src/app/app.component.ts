import { Component } from '@angular/core';

import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-firebase Home';

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {

    this.authService.onAuthState()
      .then( (currentUser) => {
        console.log('user logged in', currentUser);
      })
      .catch( (error) => {

      });
  }
  
}
