import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerVehiclesComponent } from './customer-vehicles/customer-vehicles.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerManageAppointmentsComponent } from './customer-manage-appointments/customer-manage-appointments.component';
import { ShopComponent } from './shop/shop.component';
import { ShopManageServicesComponent } from './shop-manage-services/shop-manage-services.component';
import { ShopManagePartsComponent } from './shop-manage-parts/shop-manage-parts.component';
import { ShopManageAppointmentsComponent } from './shop-manage-appointments/shop-manage-appointments.component';

// Routes of the application
const routes: Routes = [
    { path: 'customer', component: AuthenticateComponent },
    { path: 'customer/profile', component: CustomerComponent },
    { path: 'customer/vehicles', component: CustomerVehiclesComponent },
    { path: 'customer/services', component: CustomerServicesComponent },
    { path: 'customer/manage-profile', component: ProfileComponent},
    { path: 'customer/manage-appointments', component: CustomerManageAppointmentsComponent},
    { path: 'shop', component: AuthenticateComponent },
    { path: 'shop/profile', component: ShopComponent },
    { path: 'shop/manage-services', component: ShopManageServicesComponent },
    { path: 'shop/manage-parts', component: ShopManagePartsComponent },
    { path: 'shop/manage-appointments', component: ShopManageAppointmentsComponent },
    { path: 'shop/manage-profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
