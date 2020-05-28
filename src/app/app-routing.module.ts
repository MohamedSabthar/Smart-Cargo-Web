import { AdminComponent } from './pages/main-content/admin/admin.component';
import { DriverManagementComponent } from './pages/main-content/admin/driver-management/driver-management.component';
import { AdminDashboardComponent } from './pages/main-content/admin/admin-dashboard/admin-dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ServerErrorPageComponent } from './pages/server-error-page/server-error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'server-error', component: ServerErrorPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'driver-management', component: DriverManagementComponent },
    ],
  },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
