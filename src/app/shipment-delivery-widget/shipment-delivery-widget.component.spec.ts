import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDeliveryWidgetComponent } from './shipment-delivery-widget.component';

describe('ShipmentDeliveryWidgetComponent', () => {
  let component: ShipmentDeliveryWidgetComponent;
  let fixture: ComponentFixture<ShipmentDeliveryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentDeliveryWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentDeliveryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
