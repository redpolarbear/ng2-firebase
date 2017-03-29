import { Component } from '@angular/core';

import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-firebase Home';

  constructor(
    private firebaseService: FirebaseService
  ) {}
  
}
