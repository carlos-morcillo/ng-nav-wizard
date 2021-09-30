import { Directive, HostListener } from '@angular/core';
import { NgStepComponent } from '../public_api';

@Directive({
	selector: '[prevStepButton]',
})
export class PrevStepButtonDirective {

	constructor(
		private _parent: NgStepComponent
	) { }

	@HostListener('click') onClick() {
		this._parent.container.goToprev()
	}
}
