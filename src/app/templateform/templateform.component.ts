import { Component } from '@angular/core';
import { Person } from '../models/person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

  person!: Person;

  constructor() {
    this.person = new Person();
    this.person.firstName = 'Atallah';
    this.person.secondName = 'Isayed';

  }

  onSubmit(myForm: NgForm) {


    myForm.controls['firstName'].setValue('Ahmad');

    myForm.setValue({ firstName: 'samer' });


    var values = myForm.value;

    var p: Person = { firstName: values.firstName, secondName: values.secondName };
    var p2 = new Person();
    p2.firstName = values.firstName;
    p2.secondName = values.secondName;

    alert(JSON.stringify(values));



  }

}
