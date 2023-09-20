import { TemplateRef, Directive } from '@angular/core';

@Directive({
	selector: '[ng80StepperNav], [stepperNav]'
})
export class StepperNavDirective {
	constructor(public template: TemplateRef<any>) {}
}
