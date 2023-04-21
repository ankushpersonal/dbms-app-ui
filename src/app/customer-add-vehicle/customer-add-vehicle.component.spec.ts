import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddVehicleComponent } from './customer-add-vehicle.component';

describe('AddVehicleComponent', () => {
  let component: CustomerAddVehicleComponent;
  let fixture: ComponentFixture<CustomerAddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
