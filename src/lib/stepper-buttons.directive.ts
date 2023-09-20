import { TemplateRef, Directive } from '@angular/core';

@Directive({
	selector: '[ng80StepperButtons], [stepperButtons]'
})
export class StepperButtonsDirective {
	constructor(public template: TemplateRef<any>) {}
}
