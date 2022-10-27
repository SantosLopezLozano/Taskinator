import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/core/models/task';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('task') set task(task:Task){
    if(task){
      this.form.controls.id.setValue(task.id);
      this.form.controls.name.setValue(task.name);
      this.form.controls.picture?.setValue(task.picture);
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
      picture:['']
    });
  }

  ngOnInit() {

  }

  confirm(){
    this.modalController.dismiss({task: this.form.value, mode:this.mode}, 'ok');
  }

}
