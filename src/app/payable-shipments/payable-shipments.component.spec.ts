import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableShipmentsComponent } from './payable-shipments.component';

describe('PayableShipmentsComponent', () => {
  let component: PayableShipmentsComponent;
  let fixture: ComponentFixture<PayableShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayableShipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayableShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
