import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent {
  myGroup!: FormGroup;

  myControl = new FormControl<string>('ahmad');

  thirdNameVisible = false;

  constructor(private fb: FormBuilder) {


    var person: Person = { firstName: 'Atallah', secondName: 'Isayed' };
    this.myGroup = fb.group({
      'firstName': ['Hamouda', [Validators.required, Validators.minLength(2)]],
      'secondName': ['', Validators.required]

    });


    this.myGroup.setValue(person);




  }


  onSubmit() {


    alert(JSON.stringify(this.myGroup.value));
  }


  viewThirdName() {

    if (this.myGroup.contains('thirdName')) {

      this.myGroup.removeControl('thirdName');
      this.thirdNameVisible = false;
    }
    else {
      this.myGroup.addControl('thirdName', this.myControl);
      this.thirdNameVisible = true;

    }
  }


  setValues() {
    this.myGroup.setValue({ firstName: 'Mahdi', secondName: 'Abed', thirdName: 'Turkman', age: 40 });
  }


  restValues() {
    this.myGroup.reset();
  }

  doSomething() {

  }

}
