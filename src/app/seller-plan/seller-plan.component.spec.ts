import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPlanComponent } from './seller-plan.component';

describe('SellerPlanComponent', () => {
  let component: SellerPlanComponent;
  let fixture: ComponentFixture<SellerPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerPlanComponent]
    });
    fixture = TestBed.createComponent(SellerPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
