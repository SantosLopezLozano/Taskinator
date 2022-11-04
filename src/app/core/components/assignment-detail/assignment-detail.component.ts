import { Person } from './../../models/person';
import { AsignmentService } from './../../services/asignments';
import { PeopleService } from './../../services/people.service';
import { TaskService } from './../../services/task.service';
import { ModalController } from '@ionic/angular';
import { Asignment } from 'src/app/core/models/asignments';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('asignment') set asignment(asignment:Asignment){
    if(asignment){
      this.form.controls.id.setValue(asignment.id);
      this.form.controls.personId.setValue(asignment.personId);
      this.form.controls.taskId.setValue(asignment.taskId);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private tasksService:TaskService,
    private peopleService:PeopleService,
    private asignmentsService:AsignmentService,
    private formBuilder:FormBuilder,
    private modalController:ModalController
  ) { 
    this.form = this.formBuilder.group({
      id:[null],
      taskId:['', [Validators.required]],
      personId:['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  confirm(){
    this.modalController.dismiss({asignment: this.form.value, mode:this.mode}, 'ok');
  }

}
