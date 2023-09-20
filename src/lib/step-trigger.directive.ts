import { TemplateRef, Directive } from '@angular/core';

@Directive({
	selector: '[ng80StepTrigger] [stepTrigger]'
})
export class StepTriggerDirective {

	constructor(public template: TemplateRef<any>) { }

}
