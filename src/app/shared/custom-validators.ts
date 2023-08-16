import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static createPasswordStrengthValidator(requredUpper: boolean = true, requiredLower: boolean = true, requireDigit = true): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {


            const value = control.value;

            if (!value) {
                return null;
            }


            const hasUpperCase = /[A-Z]+/.test(value);

            if (!hasUpperCase && requredUpper) {
                return { upperCase: true }
            }

            const hasLowerCase = /[a-z]+/.test(value);

            if (!hasLowerCase && requiredLower) {
                return { lowerCase: true }
            }

            const hasNumeric = /[0-9]+/.test(value);

            if (!hasNumeric && requireDigit) {
                return { numericCase: true }
            }

            const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;



            // no errors
            return null;//!passwordValid ? { passwordStrength: true } : null;
        }
    }
}
