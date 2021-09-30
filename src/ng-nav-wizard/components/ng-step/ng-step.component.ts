import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgStepTriggerDirective } from '../../directives/ng-step-trigger.directive';
import { NgNavWizardComponent } from '../ng-nav-wizard/ng-nav-wizard.component';
import { PrevStepButtonDirective } from '../../directives/prev-step-button.directive';
import { NextStepButtonDirective } from '../../directives/next-step-button.directive';

@Component({
	selector: 'ng-step',
	templateUrl: './ng-step.component.html',
	styleUrls: ['./ng-step.component.scss'],
	animations: [
		trigger('slideInOut', [
			transition(':enter', [
				style({ transform: 'translateX(-100%)', opacity: 0 }),
				animate('256ms 256ms', style({ transform: 'translateX(0%)', opacity: 1 }))
			]),
			transition(':leave', [
				animate('256ms ease-in', style({ transform: 'translateX(100%)' }))
			])
		])
	]

})
export class NgStepComponent implements AfterContentInit {

	@Input() index: number;
	@Input() title: string;
	@Input() disabled: boolean = false;

	@ViewChild('innerTemplate') innerTemplate: TemplateRef<any>;
	@ContentChild(NgStepTriggerDirective, { read: TemplateRef }) stepTriggerTpt: NgStepTriggerDirective;

	@ContentChildren(PrevStepButtonDirective) prevStepsButtons !: QueryList<PrevStepButtonDirective>;
	@ContentChildren(NextStepButtonDirective) nextStepButtons !: QueryList<NextStepButtonDirective>;

	constructor(
		public container: NgNavWizardComponent
	) { }

	ngAfterContentInit(): void {
		// console.log(this.prevStepsButtons);
		// console.log(this.nextStepButtons);
	}
}
