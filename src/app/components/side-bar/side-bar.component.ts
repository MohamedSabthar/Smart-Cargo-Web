import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  role: String;
  name:String;

  constructor(private _authService: AuthService,private _storeKeeperService:StoreKeeperService) {}

  ngOnInit(): void {
    this.role = this._authService.getRole();
    this._storeKeeperService.getProfile(this._authService.getId()).subscribe((res)=>{
      console.log('profile')
      this.name = `${res.result.name.first}`
    },(error)=>{
      this.name = "Loading..."
    })
  }

  //logout from the application
  logout() {
    this._authService.logout();
  }

  isAdmin(){
    return this.role == "admin" ? true : false;
  }
}
