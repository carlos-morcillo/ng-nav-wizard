
import { Directive, HostListener } from '@angular/core';
import { StepperComponent } from '../public-api';

@Directive({
	selector: '[ng80NextStepButton] [nextStepButton]'
})
export class NextStepButtonDirective {

	constructor(
		private _stepper: StepperComponent
	) { }

	@HostListener('click') onClick() {
		this._stepper.goTonext()
	}

}
