import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-manage-appointments',
  templateUrl: './customer-manage-appointments.component.html',
  styleUrls: ['./customer-manage-appointments.component.css']
})
export class CustomerManageAppointmentsComponent implements OnInit {
  filterForm: FormGroup;

  appointments: any[] = [
    { id: 1, date: new Date(2023, 4, 18), time: '10:00 AM', status: 'Scheduled', vehicle: 'Honda Civic', payment: 'Pending' },
    { id: 2, date: new Date(2023, 4, 19), time: '2:00 PM', status: 'InProgress', vehicle: 'Toyota Corolla', payment: 'Paid' },
    { id: 3, date: new Date(2023, 4, 20), time: '11:00 AM', status: 'Completed', vehicle: 'Nissan Altima', payment: 'Paid' },
    { id: 4, date: new Date(2023, 4, 22), time: '9:00 AM', status: 'Scheduled', vehicle: 'Ford Focus', payment: 'Pending' },
    { id: 5, date: new Date(2023, 4, 23), time: '1:00 PM', status: 'InProgress', vehicle: 'Chevrolet Impala', payment: 'Pending' },
    { id: 6, date: new Date(2023, 4, 24), time: '3:00 PM', status: 'Completed', vehicle: 'Dodge Charger', payment: 'Paid' }
  ];
  filteredAppointments: any = [];
  
  constructor(private formBuilder: FormBuilder) {
    // Filter form
    this.filterForm = this.formBuilder.group({
      date: [''],
      serviceType: [''],
      status: [''],
      payment: [''],
      vehicle: ['']
    });
    this.applyFilter();
  }


  ngOnInit() {
  }

  // Functionality when filter is clicked
  applyFilter() {
    const filter = this.filterForm.value;
    this.filteredAppointments = this.appointments.filter(appointment => {
      const dateMatch = filter.date ? appointment.date.toISOString().includes(filter.date) : true;
      const serviceTypeMatch = filter.serviceType ? appointment.serviceType === filter.serviceType : true;
      const statusMatch = filter.status ? appointment.status === filter.status : true;
      const paymentMatch = filter.payment ? appointment.payment === filter.payment : true;
      const vehicleMatch = filter.vehicle ? appointment.vehicle.toLowerCase().includes(filter.vehicle.toLowerCase()) : true;
      return dateMatch && serviceTypeMatch && statusMatch && paymentMatch && vehicleMatch;
    });
  }

  // Change event upon selection of fields
  onActionChange(event: any, appointment: any) {
    switch (event) {
      case 'edit':
        break;
      case 'cancel':
        appointment.status = 'Canceled';
        break;
      case 'complete':
        appointment.status = 'Completed';
        appointment.payment = 'Paid';
        break;
    }
  }

}
