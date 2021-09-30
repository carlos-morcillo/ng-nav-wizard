import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[stepTrigger]'
})
export class NgStepTriggerDirective {

	constructor(public template: TemplateRef<any>) { }

}
