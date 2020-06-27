import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  displayAlert:boolean = false; //token to render password reset message
  validResponseMessage:string;


  passwordResetForm = this._fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  ngOnInit(): void {
    //get the token from URL
    this.token = this._activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit() {
    console.log('hit');
    this._authService
      .resetPassword(this.token, this.passwordResetForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.displayAlert = true;
          this.validResponseMessage = response.message as string;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  closeAlert(){
    this.displayAlert = false;
  }

}
