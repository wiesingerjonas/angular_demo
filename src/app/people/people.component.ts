import { Component, OnInit } from '@angular/core';
import {PersonService} from "../person.service";
import {Person} from "../../models";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[];
  clicked = false;

  selectedPerson: Person | null;

  constructor(private readonly personservice: PersonService) {
    this.people = [];
    this.selectedPerson = null;

    personservice.getPeople().subscribe(value => {
      this.people = value;
    })
  }

  ngOnInit(): void {
  }

  selectPerson(person: Person): void {
    this.clicked = true;
    this.selectedPerson = person;
  }

  handleOutput(person: Person): void {
    console.log(person);
    this.personservice.updatePerson(person);
  }
}
