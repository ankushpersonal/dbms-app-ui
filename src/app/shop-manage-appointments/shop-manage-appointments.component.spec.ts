import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManageAppointmentsComponent } from './shop-manage-appointments.component';

describe('ShopManageAppointmentsComponent', () => {
  let component: ShopManageAppointmentsComponent;
  let fixture: ComponentFixture<ShopManageAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopManageAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopManageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
