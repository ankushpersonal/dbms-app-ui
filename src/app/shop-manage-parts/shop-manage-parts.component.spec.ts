import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManagePartsComponent } from './shop-manage-parts.component';

describe('ShopManagePartsComponent', () => {
  let component: ShopManagePartsComponent;
  let fixture: ComponentFixture<ShopManagePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopManagePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopManagePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
