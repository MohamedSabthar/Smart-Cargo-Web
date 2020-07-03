import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  isLoading = false; //variable display/hide loader

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngAfterViewInit(): void {
    Feather.replace();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    let credential = this.loginForm.value;
    this.isLoading = true; // display loading icon
    this._authService.login(credential).subscribe(
      (response) => {
        //store the token in the application storage
        localStorage.setItem('token', response.token);

        const role = this._authService.getRole();
        //if user is admin then navigate to admin dashboard
        if (role == 'admin') this._router.navigate(['/admin']);
        else if (role == 'store-keeper')
          this._router.navigate(['/store-keeper']);
        this.isLoading = false; // hide loading icon
      },
      (error) => {
        if (error.status == 401)
          this.loginForm.setErrors({ invalidCredential: error.error.message });
        this.isLoading = false; // hide loading icon
      }
    );
  }

  ngOnInit(): void {
    //if user already logged-in redirect to specific to specific dashboard (admin/store-keeper)
    if (this._authService.isLoggedIn()) {
      const role = this._authService.getRole();
      //if user is admin then navigate to admin dashboard
      if (role == 'admin') this._router.navigate(['/admin']);
      else if (role == 'store-keeper') this._router.navigate(['/store-keeper']);
    }
  }
}
