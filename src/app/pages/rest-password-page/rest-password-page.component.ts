import { PasswordValidator } from './password.validator';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import  * as Feather from 'feather-icons';


@Component({
  selector: 'app-rest-password-page',
  templateUrl: './rest-password-page.component.html',
  styleUrls: ['./rest-password-page.component.css'],
})
export class RestPasswordPageComponent implements OnInit {
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _fb: FormBuilder
  ) {}

  token: String; //variable to store email validtity token from URL
  displayAlert: boolean = false; //token to render password reset message
  validResponseMessage: string;

  isLoading = false; //variable display/hide loader

  passwordResetForm = this._fb.group(
    {
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: PasswordValidator.passwordShouldMatch }
  );

  ngOnInit(): void {
    //get the token from URL
    this.token = this._activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  get password() {
    return this.passwordResetForm.get('password');
  }

  get confirmPassword() {
    return this.passwordResetForm.get('confirmPassword');
  }

  onSubmit() {
    this.isLoading = true; //show loader icon
    this._authService
      .resetPassword(this.token, this.passwordResetForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.displayAlert = true;
          this.validResponseMessage = response.message as string;
          this.isLoading = false; // hide loader icon
        },
        (error) => {

          if(error.status==400)
          this.passwordResetForm.setErrors({inValidReqeust:error.error.error});
          this.isLoading = false; // hide loader icon

        }
      );
  }

  closeAlert() {
    this.displayAlert = false;
  }
}
