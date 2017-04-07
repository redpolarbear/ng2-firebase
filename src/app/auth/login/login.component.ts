import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

// Provider
import { AuthService } from '../../providers/auth.service';

// Interface
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUser: any = {};

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  _buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
    })
  }

  doLogin(formValues: any, isValid: boolean) {
    if (isValid) {
      this.authService.login(formValues)
        .then( () => {
          console.log('login successfully');
          this.router.navigate(['/foodstack']);
        })
    }
  }

  doLogout() {
    this.authService.logout()
      .then( () => {
        console.log('logged out');
      })
  }

  getCurrentUser(): any {
    this.authService.getCurrentUser()
      .then( (user) => {
        // console.log(user);
        // this.currentUser = user;
        this.currentUser = user;
      })
      .catch( (error) => {
        console.log(error);
      })
  }
    
}
