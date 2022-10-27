import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people:Person[] = [
    {
      id:1,
      name:"Sara",
      surname:"Chidouin",
      nickname:"Sarita",
      picture:"https://cdn.myanimelist.net/r/360x360/images/characters/8/426328.jpg?s=c0af1e59e68980d6d16a6673707a7016"
    },
    {
      id:2,
      name:"Jo",
      surname:"Tazuna",
      nickname:"Joe",
      picture:"https://pm1.narvii.com/7684/6b342c56517b0e003042f42435b0757673c13c34r1-1440-1432v2_hq.jpg"
    },
    {
      id:3,
      name:"Q-Taro",
      surname:"3",
      nickname:"Q-Taro", 
      picture:"https://i1.sndcdn.com/artworks-6rTfejGNFxaBaV2x-CQwJuw-t500x500.jpg"
    },
    {
      id:4,
      name:"Reko",
      surname:"Yasubame",
      nickname:"Rekompi",
      picture:"https://cdn.myanimelist.net/r/360x360/images/characters/13/426347.jpg?s=2998ea82a9c45a28fc58016c9ffedf41"
    },
    {
      id:5,
      name:"Nao",
      surname:"Egokoro",
      nickname:"Nao",
      picture:"https://static1.personality-database.com/profile_images/4e5300475a464c1281741439a9478329.png"
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

  editPerson(_person:Person){
    var person = this.people.find(p=>p.id==_person.id);
    if(person){
      person.name = _person.name;
      person.surname = _person.surname;
      person.nickname = _person.nickname;
      person.picture = _person.picture;
    }
  }
  addPerson(person:Person){
    person.id = this.id++;
    this.people.push(person);
  }
}
