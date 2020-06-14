import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreKeeperGaurdService {

  constructor(private _authService:AuthService,private _router:Router) { }

  canActivate(): boolean {
    const role = this._authService.getRole();

    //allow if the user is store-keeper
    if (role == 'store-keeper') return true;
    //if the user-is storekeeper redirect to admin dashboard
    else if (role == 'admin') this._router.navigate(['/admin']);
    return false;
  }
}
