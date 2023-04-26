import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManageReportsComponent } from './shop-manage-reports.component';

describe('ShopManageReportsComponent', () => {
  let component: ShopManageReportsComponent;
  let fixture: ComponentFixture<ShopManageReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopManageReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopManageReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
