import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeActionAppointmentComponent } from './take-action-appointment.component';

describe('TakeActionAppointmentComponent', () => {
  let component: TakeActionAppointmentComponent;
  let fixture: ComponentFixture<TakeActionAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeActionAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeActionAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
