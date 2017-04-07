import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as md5 from 'md5';

// Interface - Model
import { User } from '../user';

// Service
import { AuthService } from '../../providers/auth.service';

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
  }

  _buildForm() {
    this.signupForm = this.formBuilder.group({
      first: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      last: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      email: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
    })
  }

  doSignup(formValues: any, isValid: boolean) {
    if (isValid) {
      this.authService.signUp(formValues)
        .then( (message) => {
          if (message) {
            console.log('Signup Callback', message);
          }
        })
        .catch( (error) => {
          console.log('Signup Error', error);
        })
    }
  }

  // subscribeToFormChanges() {
  //   const mySignupFormChanges$ = this.signupForm.valueChanges;
  //   mySignupFormChanges$.subscribe( x => {
  //     console.log(x);
  //   })
  // }

}
