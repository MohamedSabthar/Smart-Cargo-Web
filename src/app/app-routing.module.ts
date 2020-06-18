import { ScheduleOrdersComponent } from './pages/main-content/admin/schedule-orders/schedule-orders.component';
import { StoreKeeperDashboardComponent } from './pages/main-content/store-keeper/store-keeper-dashboard/store-keeper-dashboard.component';
import { StoreKeeperComponent } from './pages/main-content/store-keeper/store-keeper.component';
import { StoreKeeperGaurdService } from './services/store-keeper-gaurd.service';
import { AdminGaurdService } from './services/admin-gaurd.service';
import { GaurdService } from './services/gaurd.service';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { AdminComponent } from './pages/main-content/admin/admin.component';
import { DriverManagementComponent } from './pages/main-content/admin/driver-management/driver-management.component';
import { AdminDashboardComponent } from './pages/main-content/admin/admin-dashboard/admin-dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ServerErrorPageComponent } from './pages/server-error-page/server-error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackVehiclesComponent } from './pages/main-content/admin/track-vehicles/track-vehicles.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'server-error', component: ServerErrorPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [GaurdService, AdminGaurdService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'driver-management', component: DriverManagementComponent },
      {path:'track-vehicle',component:TrackVehiclesComponent},
      { path: 'schedule-orders', component: ScheduleOrdersComponent },
    ],
  },
  {
    path: 'store-keeper',
    component: StoreKeeperComponent,
    canActivate: [GaurdService, StoreKeeperGaurdService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StoreKeeperDashboardComponent },
    ],
  },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
