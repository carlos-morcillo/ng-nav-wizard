
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NextStepButtonDirective } from '../next-step-button.directive';
import { PrevStepButtonDirective } from '../prev-step-button.directive';
import { StepTriggerDirective } from '../step-trigger.directive';

@Component({
  selector: 'ng80-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
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
export class StepComponent {

  
	@Input() index!: number;
	@Input() title?: string;
	@Input() disabled: boolean = false;

	@ViewChild('innerTemplate') innerTemplate!: TemplateRef<any>;
	@ContentChild(StepTriggerDirective, { read: TemplateRef }) stepTriggerTpt!: TemplateRef<any>;

	@ContentChildren(PrevStepButtonDirective) prevStepsButtons !: QueryList<PrevStepButtonDirective>;
	@ContentChildren(NextStepButtonDirective) nextStepButtons !: QueryList<NextStepButtonDirective>;

	constructor() { }

}
