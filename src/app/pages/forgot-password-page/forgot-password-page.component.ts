import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPasswordForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  isLoading = false; //variable display/hide loader

  displayAlert: boolean = false; //token to render mail sent message
  validResponseMessage: string;

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //if user already logged-in redirect to specific to specific dashboard (admin/store-keeper)
    if (this._authService.isLoggedIn()) {
      const role = this._authService.getRole();
      //if user is admin then navigate to admin dashboard
      if (role == 'admin') this._router.navigate(['/admin']);
      else if (role == 'store-keeper') this._router.navigate(['/store-keeper']);
    }
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    this.isLoading = true; // display loading icon
    this._authService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      (response) => {
        this.displayAlert = true;
        this.validResponseMessage = response.message as string;
        this.isLoading = false; // hide loading icon
      },
      (error) => {
        console.log(error.error.message);

        this.forgotPasswordForm.setErrors({ noMatch: error.error.message });
        this.isLoading = false; // hide loading icon
      }
    );
  }

  closeAlert() {
    this.displayAlert = false;
  }
}
