import { Directive, HostListener } from '@angular/core';
import { StepperComponent } from '../public-api';

@Directive({
	selector: '[ng80PrevStepButton]'
})
export class PrevStepButtonDirective {
	constructor(private _stepper: StepperComponent) {}

	@HostListener('click') onClick() {
		this._stepper.goToprev();
	}
}
