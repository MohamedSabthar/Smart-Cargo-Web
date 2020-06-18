import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { } from '../../services/auth.service';

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

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  onSubmit() {
    let credential = this.loginForm.value;
    this._authService.login(credential).subscribe(
      (response) => {
        //store the token in the application storage
        localStorage.setItem('token', response.token);

        const role = this._authService.getRole();
        //if user is admin then navigate to admin dashboard
        if ( role== 'admin')
          this._router.navigate(['/admin']);
        else if (role == 'store-keeper')
          this._router.navigate(['/store-keeper']);

        console.log(response.message);
      },
      (error) => {
        console.log(error.error.message);
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
