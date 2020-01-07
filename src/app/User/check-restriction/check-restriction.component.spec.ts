import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRestrictionComponent } from './check-restriction.component';

describe('CheckRestrictionComponent', () => {
  let component: CheckRestrictionComponent;
  let fixture: ComponentFixture<CheckRestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
