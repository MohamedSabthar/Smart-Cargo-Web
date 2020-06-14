import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GaurdService implements CanActivate {
  constructor(private _authService:AuthService, private _router: Router) {}

  canActivate(): boolean {
    //allow the user to requested route only if logged-in
    if (this._authService.isLoggedIn()) return true;

    //navigate to login if not logged-in
    this._router.navigate(['/']);
    return false;
  }
}
