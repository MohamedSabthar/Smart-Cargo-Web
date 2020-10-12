import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  role: string;
  name:string;

  constructor(private _authService: AuthService,private _storeKeeperService:StoreKeeperService) {}

  ngOnInit(): void {
    this.role = this._authService.getRole();

    //load name from storage
    this.name = localStorage.getItem('name')

    if(this.name==null)
    this._storeKeeperService.getProfile(this._authService.getId()).subscribe((res)=>{
      console.log('profile')
      this.name = `${res.result.name.first}`
      //persisting name variable to the storage
      localStorage.setItem('name',this.name);
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
