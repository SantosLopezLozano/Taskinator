import { Asignment } from '../models/asignments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignmentService {

  private asignment:Asignment[] = [
    {
      id:1,
      personId:2,
      taskId:2,
    },
    {
      id:2,
      personId:1,
      taskId:1
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
      asignment.personId = _asignment.personId;
      asignment.taskId = _asignment.taskId;
    }
  }
  addAsignment(asignment:Asignment){
    asignment.id = this.id++;
    this.asignment.push(asignment);
  }
}
