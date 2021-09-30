import { Directive, HostListener } from '@angular/core';
import { NgStepComponent } from '../components/ng-step/ng-step.component';

@Directive({
	selector: '[nextStepButton]'
})
export class NextStepButtonDirective {

	constructor(
		private _parent: NgStepComponent
	) { }

	@HostListener('click') onClick() {
		this._parent.container.goTonext()
	}
}
