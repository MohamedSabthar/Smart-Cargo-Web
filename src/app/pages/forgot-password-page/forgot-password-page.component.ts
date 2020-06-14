import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }

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
