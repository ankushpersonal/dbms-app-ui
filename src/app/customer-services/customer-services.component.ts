import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerScheduleAppointmentComponent } from '../customer-schedule-appointment/customer-schedule-appointment.component';

@Component({
  selector: 'app-customer-services',
  templateUrl: './customer-services.component.html',
  styleUrls: ['./customer-services.component.css']
})
export class CustomerServicesComponent {

  constructor(
    private dialog: MatDialog
  ) {

  }

  // Open schedule appointment dialog box
  scheduleAppointment(){
    const dialogRef = this.dialog.open(CustomerScheduleAppointmentComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
