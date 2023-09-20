import {
	AfterContentInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	ContentChildren,
	EventEmitter,
	Input,
	Output,
	QueryList,
	TemplateRef
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { StepperButtonsDirective } from '../stepper-buttons.directive';
import { StepperNavDirective } from '../stepper-nav.directive';

@Component({
	selector: 'ng80-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'stepper h-100 d-flex flex-column overflow-auto'
	}
})
export class StepperComponent implements AfterContentInit {
	index: number = 0;

	@Input() defaultNav: boolean = true;
	@Input() backLabel: string;
	@Input() continueLabel: string;
	@Input() submitLabel: string;

	@Output() completed = new EventEmitter();
	@Output() prev = new EventEmitter();
	@Output() next = new EventEmitter();

	@ContentChildren(StepComponent) steps!: QueryList<StepComponent>;
	@ContentChild(StepperNavDirective, { read: TemplateRef })
	stepperNavTpt?: TemplateRef<any>;
	@ContentChild(StepperButtonsDirective, { read: TemplateRef })
	stepperButtonsTpt?: TemplateRef<any>;

	get getActiveIndex(): number {
		return this.index;
	}

	get getPreviousIndex(): number | null {
		return this.index > 0 ? this.index - 1 : null;
	}

	get getNextIndex(): number | null {
		return this.index < this.steps?.length ? this.index - 1 : null;
	}

	get step(): StepComponent | null {
		return this.steps?.find((_, i) => i == this.index) ?? null;
	}

	constructor(private _cdr: ChangeDetectorRef) {}

	ngAfterContentInit(): void {
		this.steps.forEach((v, k) => (v.index = k));
		setInterval(() => this._cdr.detectChanges());
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
		this._cdr.detectChanges();
	}

	canGoNext() {
		const nextIndex = this.index + 1;
		return (
			nextIndex < this.steps.length &&
			!this.steps.find((o, k) => k == nextIndex)?.disabled
		);
	}

	complete() {
		this.completed.emit();
	}
}
