import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-schedule-appointment',
  templateUrl: './customer-schedule-appointment.component.html',
  styleUrls: ['./customer-schedule-appointment.component.css']
})
export class CustomerScheduleAppointmentComponent implements OnInit{
  appointmentForm: FormGroup;

  vehicleList = ['Car A', 'Car B', 'Car C'];
  vehicleTypeList = ['Sedan', 'SUV', 'Truck'];
  serviceTypeList = ['Oil Change', 'Tire Rotation', 'Brake Inspection'];

  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<CustomerScheduleAppointmentComponent>
  ){
    this.appointmentForm = this.fb.group({
      vehicle: ['', Validators.required],
      vehicleType: ['', Validators.required],
      serviceType: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  // Schedule appointment on click of submit
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.dialogRef.close(this.appointmentForm.value);
    }
  }

  // Cancel the operation
  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
