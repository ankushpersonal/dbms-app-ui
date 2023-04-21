import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerScheduleAppointmentComponent } from './customer-schedule-appointment.component';

describe('ScheduleAppointmentComponent', () => {
  let component: CustomerScheduleAppointmentComponent;
  let fixture: ComponentFixture<CustomerScheduleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerScheduleAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerScheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
