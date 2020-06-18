import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    Feather.replace();
  }
  //logout from the application
  logout() {
    this._authService.logout();
  }
}
