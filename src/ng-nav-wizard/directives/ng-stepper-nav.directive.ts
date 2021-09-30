import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[stepperNav]'
})
export class NgStepperNavDirective {

	constructor(public template: TemplateRef<any>) { }

}
