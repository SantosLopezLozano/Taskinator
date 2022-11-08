import { Asignment } from '../models/asignments';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AsignmentService {
//YYYY-MM-DDTHH:mm:ss+HH:MM
  private asignment:Asignment[] = [
    {
      id:1,
      personId:2,
      taskId:2,
      createdAt:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
    {
      id:2,
      personId:1,
      taskId:1,
      createdAt:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
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

  getAsignmentsByTaskId(taskId:number):Asignment[]{
    return this.asignment.filter(a=>a.taskId == taskId);
  }

  getAsignmentsByPersonId(personId:number):Asignment[]{
    return this.asignment.filter(a=>a.personId == personId);
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

  updateAssignment(assignment:Asignment){
    var _assignment = this.asignment.find(a=>a.id==assignment.id);
    if(_assignment){
      _assignment.taskId = assignment.taskId;
      _assignment.personId = assignment.personId;
    }
    
  }
}
