import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesBaseComponent } from './boxes-base.component';

describe('BoxesBaseComponent', () => {
  let component: BoxesBaseComponent;
  let fixture: ComponentFixture<BoxesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
