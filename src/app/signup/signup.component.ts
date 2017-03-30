import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Interface - Model
import { User } from '../models/user';

// Service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this._buildForm();
    // this.subscribeToFormChanges();
  }

  _buildForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6)]]
    })
  }

  doSignup(user: User, isValid: boolean) {
    if (isValid) {
      console.log(user);
      this.authService.signUp(user)
        .then( (currentUser) => {
          if (currentUser) {
            console.log('Signup Callback', currentUser);
          } else {
            
          }
        })
        .catch( (error) => {
          console.log('Signup Error', error);
        })
    }
  }

  subscribeToFormChanges() {
    const mySignupFormChanges$ = this.signupForm.valueChanges;
    mySignupFormChanges$.subscribe( x => {
      console.log(x);
    })
  }

}
