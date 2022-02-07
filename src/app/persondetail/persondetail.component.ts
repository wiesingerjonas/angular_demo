import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {

  @Input() person!: Person
  @Output() updatedPerson: EventEmitter<Person> = new EventEmitter<Person>();

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      personalInformation: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        username: new FormControl('', [
          Validators.required
        ]),
        email: new FormControl('', [
          Validators.required
        ])
      }),
      company: new FormControl('', [
        Validators.required
      ])
    })
  }


  ngOnInit(): void {

  }

  updatePerson(): void {

    /*const person: Person = {
      name: this.formGroup.get('personalInformation.name')?.value,
      company: this.formGroup.get('company')?.value,
    }*/



    this.updatedPerson.emit(this.person);
  }


}
