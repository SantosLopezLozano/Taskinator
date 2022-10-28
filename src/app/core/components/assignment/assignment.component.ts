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
    private asignmentService:AsignmentService
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

}
