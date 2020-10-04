import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  role: String;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.role = this._authService.getRole();
  }

  //logout from the application
  logout() {
    this._authService.logout();
  }
}
