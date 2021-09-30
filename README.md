# Ngx Date Range picker

![ng-nav-wizard](https://res.cloudinary.com/alsoicode/image/upload/v1542168886/ng-nav-wizard/ng-nav-wizard.png)

Current version: 1.0.44

[comment]: <> (Here's a minimal example of ng-nav-wizard in action, showing positioning on the left, right and using custom templating: https://ng-nav-wizard.netlify.app/)


## External Dependencies

- [Bootstrap](https://momentjs.com)

## Required Angular Modules

## Polyfills

If you are targeting older browsers, you may need to polyfill es7 arrays, specifically [.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Usage

Install from npm:

 - `npm install ng-nav-wizard --save`

Import and add the `NgNavWizardModule` to your main module, or wherever applicable. Example:

```TypeScript
import { NgNavWizardModule } from 'ng-nav-wizard';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }