import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { NgStepperNavDirective } from '../../directives/ng-stepper-nav.directive';
import { NgStepComponent } from '../ng-step/ng-step.component';

@Component({
	selector: 'ng-nav-wizard',
	templateUrl: './ng-nav-wizard.component.html',
	styleUrls: ['./ng-nav-wizard.component.scss']
})
export class NgNavWizardComponent implements AfterContentInit {

	index: number = 0;

	@Input() defaultNav: boolean = true;

	@Output() completed = new EventEmitter();
	@Output() prev = new EventEmitter();
	@Output() next = new EventEmitter();

	@ContentChildren(NgStepComponent) steps !: QueryList<NgStepComponent>;
	@ContentChild(NgStepperNavDirective, { read: TemplateRef }) stepperNavTpt: NgStepperNavDirective;

	get step(): NgStepComponent {
		return this.steps?.find((_, i) => i == this.index) ?? null;
	}

	ngAfterContentInit(): void {
		this.steps.forEach((v, k) => v.index = k);
	}

	goTo(index: number) {
		this.index = index;
	}

	complete() {
		this.completed.emit();
	}
}
