import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  forgotPasswordForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  displayAlert:boolean = false; //token to render mail sent message
  validResponseMessage:string;


  ngOnInit(): void {
    //if user already logged-in redirect to specific to specific dashboard (admin/store-keeper)
    if (this._authService.isLoggedIn()) {
      const role = this._authService.getRole();
      //if user is admin then navigate to admin dashboard
      if (role == 'admin') this._router.navigate(['/admin']);
      else if (role == 'store-keeper') this._router.navigate(['/store-keeper']);
    }
  }

  onSubmit() {
    this._authService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      (response) => {
        this.displayAlert = true;
        this.validResponseMessage = response.message as string;
      },
      (error) => { console.log(error.error.message);}
    );
  }

  closeAlert(){
    this.displayAlert = false;
  }
}
