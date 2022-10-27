import { AsignmentService } from '../../services/asignments';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asignment } from '../../models/asignments';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AsignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() asignment:Asignment;
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

  //Esto sirve para que al pulsar edit se envíen los datos de la persona en la que has pulsado edit
  sendAsignmentEdit(){
    this.onEdit.emit(this.asignment);
  }

  //Esto sirve para que al pulsar delete se envíen los datos de la pensona en la que has ulsado el botón delete
  sendAsignmentDelete(){
    this.onDelete.emit(this.asignment);
  }

}
