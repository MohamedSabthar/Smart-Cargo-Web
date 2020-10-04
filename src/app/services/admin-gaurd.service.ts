import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminGaurdService implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    const role = this._authService.getRole();

    //allow if the user is admin
    if (role == 'admin') return true;
    //if the user-is storekeeper redirect to store-keeper dashboard
    else if (role == 'store-keeper') this._router.navigate(['/store-keeper']);
    return false;
  }
}
