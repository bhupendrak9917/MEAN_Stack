import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McuComponent } from './mcu.component';

describe('McuComponent', () => {
  let component: McuComponent;
  let fixture: ComponentFixture<McuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McuComponent]
    });
    fixture = TestBed.createComponent(McuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
