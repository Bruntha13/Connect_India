import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSellerComponent } from './plan-seller.component';

describe('PlanSellerComponent', () => {
  let component: PlanSellerComponent;
  let fixture: ComponentFixture<PlanSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanSellerComponent]
    });
    fixture = TestBed.createComponent(PlanSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
