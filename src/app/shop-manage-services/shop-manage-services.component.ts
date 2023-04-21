import { Component } from '@angular/core';

interface Service {
  name: string;
  price: number;
  vehicleType: string;
}

@Component({
  selector: 'app-shop-manage-services',
  templateUrl: './shop-manage-services.component.html',
  styleUrls: ['./shop-manage-services.component.css']
})
export class ShopManageServicesComponent {

  // Static array of services offered
  services: Service[] = [
    {
      name: 'Oil Change',
      price: 50,
      vehicleType: 'Car'
    },
    {
      name: 'Tire Rotation',
      price: 20,
      vehicleType: 'Truck'
    },
    {
      name: 'Brake Service',
      price: 100,
      vehicleType: 'SUV'
    }
  ];


  addNewService() {
    // This function could open a modal or form to add a new service
    console.log('Add new service clicked');
  }

  editService(service: Service) {
    // This function could open a modal or form to edit the selected service
    console.log(`Edit service ${service.name} clicked`);
  }

  deleteService(service: Service) {
    // This function could show a confirmation dialog and then delete the selected service
    console.log(`Delete service ${service.name} clicked`);
  }

}