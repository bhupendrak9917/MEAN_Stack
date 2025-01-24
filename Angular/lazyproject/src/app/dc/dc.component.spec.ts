import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcComponent } from './dc.component';

describe('DcComponent', () => {
  let component: DcComponent;
  let fixture: ComponentFixture<DcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcComponent]
    });
    fixture = TestBed.createComponent(DcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
