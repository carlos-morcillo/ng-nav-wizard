import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { NgStepperNavDirective } from '../../directives/ng-stepper-nav.directive';
import { NgStepComponent } from '../ng-step/ng-step.component';

@Component({
	selector: 'ng-nav-wizard',
	templateUrl: './ng-nav-wizard.component.html',
	styleUrls: ['./ng-nav-wizard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgNavWizardComponent implements AfterContentInit {

	index: number = 0;

	@Input() defaultNav: boolean = true;

	@Output() completed = new EventEmitter();
	@Output() prev = new EventEmitter();
	@Output() next = new EventEmitter();

	@ContentChildren(NgStepComponent) steps !: QueryList<NgStepComponent>;
	@ContentChild(NgStepperNavDirective, { read: TemplateRef }) stepperNavTpt: NgStepperNavDirective;

	get getActiveIndex(): number {
		return this.index;
	}

	get getPreviousIndex(): number {
		return this.index > 0 ? this.index - 1 : null;
	}

	get getNextIndex(): number {
		return this.index < this.steps?.length ? this.index - 1 : null;
	}

	get step(): NgStepComponent {
		return this.steps?.find((_, i) => i == this.index) ?? null;
	}

	constructor(
		private _cdr: ChangeDetectorRef
	) { }

	ngAfterContentInit(): void {
		this.steps.forEach((v, k) => v.index = k);
	}

	goToprev() {
		this.goTo(this.index - 1);
	}

	goTonext() {
		this.goTo(this.index + 1);
	}

	goTo(index: number) {
		if (index >= 0 && index < this.steps.length) {
			this.index = index;
		} else {
			throw new Error('Undefined index');
		}
		this._cdr.markForCheck();
	}

	canGoNext() {
		const nextIndex = this.index + 1;
		return nextIndex < this.steps.length && !this.steps.find((o, k) => k == nextIndex).disabled;
	}

	complete() {
		this.completed.emit();
	}
}
