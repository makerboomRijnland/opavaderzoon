import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaderComponent } from './vader.component';

describe('VaderComponent', () => {
  let component: VaderComponent;
  let fixture: ComponentFixture<VaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
