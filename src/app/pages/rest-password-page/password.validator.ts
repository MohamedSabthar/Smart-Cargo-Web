import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static passwordShouldMatch(
    control: AbstractControl
  ): ValidationErrors  {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if (password.value !== confirmPassword.value)
      return { passwordNotMatch: true };  //setting the error in form level when feilds doesn't match
    return null;
  }
}
