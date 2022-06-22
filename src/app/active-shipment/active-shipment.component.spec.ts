import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveShipmentComponent } from './active-shipment.component';

describe('ActiveShipmentComponent', () => {
  let component: ActiveShipmentComponent;
  let fixture: ComponentFixture<ActiveShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
