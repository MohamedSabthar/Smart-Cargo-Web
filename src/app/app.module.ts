import { AdminDashboardComponent } from './pages/main-content/admin/admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ServerErrorPageComponent } from './pages/server-error-page/server-error-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DriverManagementComponent } from './pages/main-content/admin/driver-management/driver-management.component';
import { AdminComponent } from './pages/main-content/admin/admin.component';
import { TrackVehiclesComponent } from './pages/main-content/admin/track-vehicles/track-vehicles.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ServerErrorPageComponent,
    SideBarComponent,
    AdminDashboardComponent,
    NavBarComponent,
    DriverManagementComponent,
    AdminComponent,
    TrackVehiclesComponent,
    TimelineComponent,
   
  ],
  
  imports: [BrowserModule, AppRoutingModule,GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
