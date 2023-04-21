import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerVehiclesComponent } from './customer-vehicles/customer-vehicles.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { CustomerAddVehicleComponent } from './customer-add-vehicle/customer-add-vehicle.component';
import { CustomerScheduleAppointmentComponent } from './customer-schedule-appointment/customer-schedule-appointment.component';
import { CustomerManageAppointmentsComponent } from './customer-manage-appointments/customer-manage-appointments.component';
import { ShopComponent } from './shop/shop.component';
import { ShopManageServicesComponent } from './shop-manage-services/shop-manage-services.component';
import { ShopManagePartsComponent } from './shop-manage-parts/shop-manage-parts.component';
import { ShopManageAppointmentsComponent } from './shop-manage-appointments/shop-manage-appointments.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticateComponent,
    CustomerComponent,
    CustomerVehiclesComponent,
    CustomerServicesComponent,
    CustomerAddVehicleComponent,
    CustomerScheduleAppointmentComponent,
    CustomerManageAppointmentsComponent,
    ProfileComponent,
    PasswordComponent,
    ShopComponent,
    ShopManageServicesComponent,
    ShopManagePartsComponent,
    ShopManageAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
