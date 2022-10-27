import { Asignments } from './../models/asignments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private asignments:Asignments[] = [
    {
      id:1,
      name:"leades",
      person:"Chidouin",
      task:"killJoe",
      picture:"https://cdn.myanimelist.net/r/360x360/images/characters/8/426328.jpg?s=c0af1e59e68980d6d16a6673707a7016"
    },
    {
      id:2,
      name:"leader'sfriend",
      person:"jo",
      task:"die",
      picture:"https://pm1.narvii.com/7684/6b342c56517b0e003042f42435b0757673c13c34r1-1440-1432v2_hq.jpg"
    }
  ];

  id:number = this.asignments.length+1;
  constructor() {

  }

  getAsignment(){
    return this.asignments;
  }

  getAsignmentById(id:number){
    return this.asignments.find(p=>p.id==id);
  }

  deleteAsignment(id:number) {
    this.asignments = this.asignments.filter(p=>p.id != id); 
  }

  editAsignment(_asignment:Asignments){
    var asignment = this.asignments.find(p=>p.id==_asignment.id);
    if(asignment){
      asignment.name = _asignment.name;
      asignment.person = _asignment.person;
      asignment.task = _asignment.task;
      asignment.picture = _asignment.picture;
    }
  }
  addAsignment(asignment:Asignments){
    asignment.id = this.id++;
    this.asignments.push(asignment);
  }
}
