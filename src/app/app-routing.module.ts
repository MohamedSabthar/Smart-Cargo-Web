import { AddOrderDimentionComponent } from './pages/main-content/admin/add-order-dimention/add-order-dimention.component';
import { RestPasswordPageComponent } from './pages/rest-password-page/rest-password-page.component';
import { DepotManagementComponent } from './pages/main-content/admin/depot-management/depot-management.component';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';
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
import { TrackOrderComponent } from './pages/main-content/admin/track-order/track-order.component';
import { VehicleManagementComponent } from './pages/main-content/admin/vehicle-management/vehicle-management.component';
import { StoreKeeperManagementComponent } from './pages/main-content/admin/store-keeper-management/store-keeper-management.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'server-error', component: ServerErrorPageComponent },
  { path: 'forbidden', component: ForbiddenPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [GaurdService, AdminGaurdService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'driver-management', component: DriverManagementComponent },
      { path: 'vehicle-management', component:  VehicleManagementComponent },
      { path: 'depot-management', component: DepotManagementComponent },
      { path: 'store-keeper-management', component: StoreKeeperManagementComponent },
      { path: 'schedule-orders', component: ScheduleOrdersComponent },
      { path: 'track-order', component:TrackOrderComponent},
      { path: 'add-order-dimention', component:AddOrderDimentionComponent}
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
  {path:'reset-password/:token',component:RestPasswordPageComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
