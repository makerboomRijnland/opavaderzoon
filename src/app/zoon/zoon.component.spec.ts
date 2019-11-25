import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoonComponent } from './zoon.component';

describe('ZoonComponent', () => {
  let component: ZoonComponent;
  let fixture: ComponentFixture<ZoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
