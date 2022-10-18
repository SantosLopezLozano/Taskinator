import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  person: Person
  constructor(
    private peopleS:PeopleService,
  ) { }

  ngOnInit() {

  }

  getPeople(){
    return this.peopleS.getPeople();
  }

}
