import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Directive({
  selector: '[PasswordStrength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
})
export class PasswordStrengthDirective implements Validator {

  @Input() PasswordStrength!: PasswordStrengthParams

  @Input('PasswordStrengthActive') isActive: boolean = true;
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if (!this.isActive) return null;
    return CustomValidators.createPasswordStrengthValidator(this.PasswordStrength.requireUpperChars, this.PasswordStrength.requireLowerChars, this.PasswordStrength.requireDigits)(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    //d throw new Error('Method not implemented.');
  }

}


class PasswordStrengthParams {
  requireDigits: boolean = true;
  requireUpperChars: boolean = true;
  requireLowerChars: boolean = true;


} 
