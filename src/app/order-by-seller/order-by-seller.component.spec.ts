import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBySellerComponent } from './order-by-seller.component';

describe('OrderBySellerComponent', () => {
  let component: OrderBySellerComponent;
  let fixture: ComponentFixture<OrderBySellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBySellerComponent]
    });
    fixture = TestBed.createComponent(OrderBySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
