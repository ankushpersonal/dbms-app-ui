import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManageAppointmentsComponent } from './customer-manage-appointments.component';

describe('ManageAppointmentsComponent', () => {
  let component: CustomerManageAppointmentsComponent;
  let fixture: ComponentFixture<CustomerManageAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerManageAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerManageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
