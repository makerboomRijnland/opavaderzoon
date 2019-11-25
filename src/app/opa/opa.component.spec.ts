import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpaComponent } from './opa.component';

describe('OpaComponent', () => {
  let component: OpaComponent;
  let fixture: ComponentFixture<OpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
