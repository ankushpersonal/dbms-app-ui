import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManageServicesComponent } from './shop-manage-services.component';

describe('ShopManageServicesComponent', () => {
  let component: ShopManageServicesComponent;
  let fixture: ComponentFixture<ShopManageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopManageServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopManageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
