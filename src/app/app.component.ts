import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './providers/firebase.service';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-firebase Home';

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private router: Router) {}
  
}
