import { Asignment } from '../models/asignments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignmentService {

  private asignment:Asignment[] = [
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

  id:number = this.asignment.length+1;
  constructor() {

  }

  getAsignment(){
    return this.asignment;
  }

  getAsignmentById(id:number){
    return this.asignment.find(p=>p.id==id);
  }

  deleteAsignment(id:number) {
    this.asignment = this.asignment.filter(p=>p.id != id); 
  }

  editAsignment(_asignment:Asignment){
    var asignment = this.asignment.find(p=>p.id==_asignment.id);
    if(asignment){
      asignment.name = _asignment.name;
      asignment.person = _asignment.person;
      asignment.task = _asignment.task;
      asignment.picture = _asignment.picture;
    }
  }
  addAsignment(asignment:Asignment){
    asignment.id = this.id++;
    this.asignment.push(asignment);
  }
}
