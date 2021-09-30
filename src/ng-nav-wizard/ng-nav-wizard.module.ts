import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNavWizardComponent } from './components/ng-nav-wizard/ng-nav-wizard.component';
import { NgStepComponent } from './components/ng-step/ng-step.component';
import { NgStepTriggerDirective } from './directives/ng-step-trigger.directive';
import { NgStepperNavDirective } from './directives/ng-stepper-nav.directive';
import { NextStepButtonDirective } from './directives/next-step-button.directive';
import { PrevStepButtonDirective } from './directives/prev-step-button.directive';

@NgModule({
	declarations: [
		NgNavWizardComponent,
		NgStepComponent,
		NgStepTriggerDirective,
		NgStepperNavDirective,
		NextStepButtonDirective,
		PrevStepButtonDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		NgNavWizardComponent,
		NgStepComponent,
		NgStepTriggerDirective,
		NgStepperNavDirective,
		NextStepButtonDirective,
		PrevStepButtonDirective
	]
})
export class NgNavWizardModule { }
