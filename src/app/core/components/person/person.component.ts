import { PeopleService } from './../../services/people.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person:Person;
  constructor(
    private peopleS:PeopleService
  ){

  }

 

  ngOnInit(
  ) {

  } 
  getPeople() {
    return this.peopleS.getPeople()
  }

  //Esto sirve para que al pulsar edit se envíen los datos de la persona en la que has pulsado edit
  sendPersonEdit(){
    this.onEdit.emit(this.person);
  }

  //Esto sirve para que al pulsar delete se envíen los datos de la pensona en la que has ulsado el botón delete
  sendPersonDelete(){
    this.onDelete.emit(this.person);
  }

}
