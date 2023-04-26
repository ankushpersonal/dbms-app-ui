import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopServicesService } from '../shop-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-take-action-appointment',
  templateUrl: './take-action-appointment.component.html',
  styleUrls: ['./take-action-appointment.component.css']
})
export class TakeActionAppointmentComponent implements OnInit{

  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TakeActionAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shopService: ShopServicesService,
    private datePipe: DatePipe
  ){
    this.updateForm = this.fb.group({
      start_time: [null],
      end_time: [null],
      status: ['In Progress']
      });
  }

  onUpdate() {
    const formData = Object.fromEntries(
      Object.entries(this.updateForm.controls).map(([controlName, control]) => [controlName, control.value || null])
    );
    this.shopService.updateAppointmentInfo(this.data.appointments.appointment_id, formData)
    .subscribe(response => {
      if('data' in response) {
        console.log(response);
        this.dialogRef.close();
      } else {
        console.log("Error updating the appointment")
      }
    })
  }

  processPayment() {
    let data = {status: "Closed"};
    this.shopService.updateAppointmentInfo(this.data.appointments.appointment_id, data)
    .subscribe(response => {
      if('data' in response) {
        console.log(response);
        this.dialogRef.close();
      } else {
        console.log("Error updating the appointment")
      }
    })
  }

  onDateChangeStartDate(event: any) {
    const formattedDate = this.datePipe.transform(event.value, 'yyyy-MM-dd');
    this.updateForm.controls['start_time'].setValue(formattedDate);

    // this.updateForm.controls['start_date']?.value = formattedDate;
  }

  onDateChangeEndDate(event: any) {
    const formattedDate = this.datePipe.transform(event.value, 'yyyy-MM-dd');
    this.updateForm.controls['end_time'].setValue(formattedDate);
  }

  ngOnInit(): void {
      console.log(this.data, "dialog box data");
  }

}
