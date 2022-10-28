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
      this.form.controls.name.setValue(asignment.personId);
      this.form.controls.surname.setValue(asignment.taskId);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private formBuilder:FormBuilder,
    private modalController:ModalController
  ) { 
    this.form = this.formBuilder.group({
      id:[null],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      nickname:['', [Validators.required]],
      picture:['']
    });
  }

  ngOnInit() {

  }

  confirm(){
    this.modalController.dismiss({asignment: this.form.value, mode:this.mode}, 'ok');
  }

}
