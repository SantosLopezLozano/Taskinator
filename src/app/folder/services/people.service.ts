import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people:Person[] = [
    {
      id:1,
      name:"1",
      surname:"1",
      nickname:"uno"
    },
    {
      id:2,
      name:"2",
      surname:"2",
      nickname:"dos"
    },
    {
      id:3,
      name:"3",
      surname:"3",
      nickname:"tres"
    },
    {
      id:4,
      name:"4",
      surname:"4",
      nickname:"cuatro"
    },
    {
      id:5,
      name:"5",
      surname:"5",
      nickname:"cuatro"
    }
  ];

  id:number = this.people.length+1;
  constructor() {

  }

  getPeople(){
    return this.people;
  }

  getPersonById(id:number){
    return this.people.find(p=>p.id==id);
  }

  deletePerson(id:number) {
    this.people = this.people.filter(p=>p.id != id); 
  }

  editPerson(person:Person){
    var person = this.people.find(p=>p.id==person.id);
    if(person){
      person.name = person.name;
      person.surname = person.surname;
      person.nickname = person.nickname;
      person.picture = person.picture;
    }
  }
  addPerson(person:Person){
    person.id = this.id++;
    this.people.push(person);
  }
}
