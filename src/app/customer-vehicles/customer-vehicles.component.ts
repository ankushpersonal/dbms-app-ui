import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAddVehicleComponent } from '../customer-add-vehicle/customer-add-vehicle.component';

@Component({
  selector: 'app-customer-vehicles',
  templateUrl: './customer-vehicles.component.html',
  styleUrls: ['./customer-vehicles.component.css']
})
export class CustomerVehiclesComponent {
  constructor(private dialog: MatDialog) {

  }

  // Add vehicle dialog box 
  addVehicle() {
    const dialogRef = this.dialog.open(CustomerAddVehicleComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
