import { ViewOrderDetailsComponent } from './components/view-order-details/view-order-details.component';
import { IconsModule } from './icon.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { StoreKeeperGaurdService } from './services/store-keeper-gaurd.service';
import { AdminGaurdService } from './services/admin-gaurd.service';
import { GaurdService } from './services/gaurd.service';
import { AuthService } from './services/auth.service';
import { AdminDashboardComponent } from './pages/main-content/admin/admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'ornamentum';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ServerErrorPageComponent } from './pages/server-error-page/server-error-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DriverManagementComponent } from './pages/main-content/admin/driver-management/driver-management.component';
import { AdminComponent } from './pages/main-content/admin/admin.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreKeeperComponent } from './pages/main-content/store-keeper/store-keeper.component';
import { StoreKeeperDashboardComponent } from './pages/main-content/store-keeper/store-keeper-dashboard/store-keeper-dashboard.component';
import { ScheduleOrdersComponent } from './pages/main-content/admin/schedule-orders/schedule-orders.component';

//import ng-bootstrap
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { TrackOrderComponent } from './pages/main-content/admin/track-order/track-order.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { VehicleManagementComponent } from './pages/main-content/admin/vehicle-management/vehicle-management.component';
import { DepotManagementComponent } from './pages/main-content/admin/depot-management/depot-management.component';
import { StoreKeeperManagementComponent } from './pages/main-content/admin/store-keeper-management/store-keeper-management.component';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';
import { RestPasswordPageComponent } from './pages/rest-password-page/rest-password-page.component';
import { AddOrderDimentionComponent } from './pages/main-content/admin/add-order-dimention/add-order-dimention.component';
import { AddOrderFormComponent } from './components/add-order-form/add-order-form.component';
import { AddOrderDetailsComponent } from './components/add-order-details/add-order-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TrackVehileMapComponent } from './components/track-vehile-map/track-vehile-map.component';
import { TrackVehileDetailsComponent } from './components/track-vehile-details/track-vehile-details.component';

import { ScheduleOrderAssignDriverComponent } from './components/schedule-order-assign-driver/schedule-order-assign-driver.component';
import { ScheduleOrderAssignVehicleComponent } from './components/schedule-order-assign-vehicle/schedule-order-assign-vehicle.component';
import { ScheduleOrderOrderListComponent } from './components/schedule-order-order-list/schedule-order-order-list.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DeliveryHistoryTableComponent } from './components/delivery-history-table/delivery-history-table.component';
import { DeliveryHistoryExpandedComponent } from './components/delivery-history-expanded/delivery-history-expanded.component';
import { UrgencyLevelComponent } from './components/urgency-level/urgency-level.component';
import { ViewRouteComponent } from './components/view-route/view-route.component';

//function to get jwt-token from the localstorage
export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    ForgotPasswordPageComponent,
    StoreKeeperComponent,
    StoreKeeperDashboardComponent,
    VehicleManagementComponent,
    DepotManagementComponent,
    StoreKeeperManagementComponent,
    ScheduleOrdersComponent,
    TrackOrderComponent,
    TimeLineComponent,
    ForbiddenPageComponent,
    RestPasswordPageComponent,
    AddOrderDimentionComponent,
    AddOrderFormComponent,
    AddOrderDetailsComponent,
    ProfileComponent,
    TrackVehileMapComponent,
    TrackVehileDetailsComponent,
    ScheduleOrderAssignDriverComponent,
    ScheduleOrderAssignVehicleComponent,
    ScheduleOrderOrderListComponent,
    DataTableComponent,
    ViewOrderDetailsComponent,
    DeliveryHistoryTableComponent,
    DeliveryHistoryExpandedComponent,
    UrgencyLevelComponent,
    ViewRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    UiSwitchModule,
    DataTableModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    GaurdService,
    AdminGaurdService,
    StoreKeeperGaurdService,
    BsModalService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddOrderFormComponent, AddOrderDetailsComponent],
})
export class AppModule {}
