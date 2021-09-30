import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNavWizardComponent } from './ng-nav-wizard.component';

describe('NgStepperComponent', () => {
  let component: NgNavWizardComponent;
  let fixture: ComponentFixture<NgNavWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNavWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNavWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
