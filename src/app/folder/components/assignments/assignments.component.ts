import { PeopleComponent } from './../people/people.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {

  constructor(
    private peopleComponent: PeopleComponent,
  ) { }

  ngOnInit() {}

  getPeople() {
    return this.peopleComponent.getPeople();
  }
  editPerson(person){

  }

  deletePerson(person){

  }

}
