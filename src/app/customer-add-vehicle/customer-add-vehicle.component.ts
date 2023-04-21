import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-add-vehicle',
  templateUrl: './customer-add-vehicle.component.html',
  styleUrls: ['./customer-add-vehicle.component.css']
})
export class CustomerAddVehicleComponent {
  vehicleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CustomerAddVehicleComponent>
  ){
    // Vehcile form
    this.vehicleForm = this.fb.group({
      vin: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      vehicleType: ['', Validators.required],
      manufacturer: ['', Validators.required]
    });
  }

  // Save the vehicle
  onSave() {
    this.dialogRef.close();
  }

  // Cancel the operation
  onCancel() {
    this.dialogRef.close();
  }
}
