import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextStepButtonDirective } from './next-step-button.directive';
import { PrevStepButtonDirective } from './prev-step-button.directive';
import { StepTriggerDirective } from './step-trigger.directive';
import { StepComponent } from './step/step.component';
import { StepperNavDirective } from './stepper-nav.directive';
import { StepperComponent } from './stepper/stepper.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { locale as enLang } from './assets/i18n/en';
import { locale as esLang } from './assets/i18n/es';

const TRANSLATION_PREFIX = 'STEPPER';

@NgModule({
	declarations: [
		StepperComponent,
		StepComponent,
		StepTriggerDirective,
		StepperNavDirective,
		PrevStepButtonDirective,
		NextStepButtonDirective
	],
	imports: [CommonModule, TranslateModule.forChild()],
	exports: [
		StepperComponent,
		StepComponent,
		StepTriggerDirective,
		StepperNavDirective,
		PrevStepButtonDirective,
		NextStepButtonDirective
	]
})
export class StepperModule {
	constructor(private _translateSvc: TranslateService) {
		this.setTranslations();
	}

	/**
	 * The function sets translations for multiple languages using a translation service.
	 */
	private setTranslations() {
		for (const language of [enLang, esLang]) {
			for (const key in language.data) {
				if (Object.prototype.hasOwnProperty.call(language.data, key)) {
					this._translateSvc.set(
						`${TRANSLATION_PREFIX}.${language.data[key]}`,
						language.lang
					);
				}
			}
		}
	}
}
