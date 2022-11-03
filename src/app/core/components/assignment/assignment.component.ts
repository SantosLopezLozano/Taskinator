import { PeopleService } from './../../services/people.service';
import { TaskService } from './../../services/task.service';
import { Task } from './../../models/task';
import { AsignmentService } from '../../services/asignments';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asignment } from '../../models/asignments';
import { Person } from '../../models';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AsignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() asignment:Asignment;
  @Input() person:Person
  @Input() task:Task
  constructor(
    private asignmentService:AsignmentService,
    private tastService:TaskService,
    private peopleService:PeopleService

  ){

  }
  
   

  ngOnInit(
  ) {

  } 
  getAsignments() {
    return this.asignmentService.getAsignment()
  }

  sendAsignmentEdit(){
    this.onEdit.emit(this.asignment);
  }

  sendAsignmentDelete(){
    this.onDelete.emit(this.asignment);
  }

  getTask():Task{
    var taskId = this.asignment.taskId;
    if(taskId)
      return this.tastService.getTaskById(taskId);
    return undefined;
  }
  getPerson():Person{
    var personId = this.asignment.personId;
    if(personId)
      return this.peopleService.getPersonById(personId)
  }

}
