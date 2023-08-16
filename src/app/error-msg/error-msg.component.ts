import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {


  @Input() control!: AbstractControl

  @Input() fieldName: string = '';


  getErrorMsg() {


    if (this.control.hasError('required')) {
      return 'field is required!';
    }


    if (this.control.hasError('minlength')) {
      return ' must be at least x chars';
    }

    if (this.control.hasError('upperCase')) {
      return 'must have at least one upper char.';
    }

    if (this.control.hasError('lowerCase')) {
      return 'must have at least one lower char.';
    }

    if (this.control.hasError('numericCase')) {
      return '  must have at least one numeric digit.';
    }


    return 'unknow error';
  }

}
