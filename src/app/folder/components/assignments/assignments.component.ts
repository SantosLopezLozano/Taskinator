import { Person } from './../../../core/models/person';
import { TaskService } from './../../../core/services/task.service';
import { PeopleService } from './../../../core/services/people.service';
import { Asignment } from './../../../core/models/asignments';
import { Task } from './../../../core/models/task';
import { AssignmentDetailComponent } from './../../../core/components/assignment-detail/assignment-detail.component';
import { AsignmentComponent } from './../../../core/components/assignment/assignment.component';
import { AsignmentService } from 'src/app/core/services/asignments';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() asignment:Asignment;
  constructor(
    private asignmentService: AsignmentService,
    private modal: ModalController,
    private alert: AlertController,
    private peopleService:PeopleService,
    private taskService:TaskService
  ) { }

  ngOnInit() {}

  getTask():Task{
    var taskId = this.asignment.taskId;
    if(taskId)
      return this.taskService.getTaskById(taskId);
    return undefined;
  }

  getPerson():Person{
    console.log(new Date().toISOString());
    var personId = this.asignment.personId;
    if(personId)
      return this.peopleService.getPersonById(personId);
    return undefined;
  }


  getAsignment() {
    return this.asignmentService.getAsignment();
  }

  newAsignment() {
    this.asignmentForm(null)
  }

  editasignment(asignment){
    this.asignmentForm(asignment)

  }

  deleteAsignment(asignment){
    this.Delete(asignment)

  }

  //////////////////////////////////////////FORMULARIO////////////////////////////////////////////////////////////
  async asignmentForm(asignment: Asignment) {
    const modal = await this.modal.create({
      component: AssignmentDetailComponent,
      componentProps: {
        asignment: asignment
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.asignmentService.addAsignment(result.data.asignment);
            break;
          case 'Edit':
            this.asignmentService.editAsignment(result.data.asignment);
            break;
          default:
        }
      }
    });
  }

  //////////////////////////////////ALLERT CONTROLLER/////////////////////////////////////////////////////////////////////////////////////
  async Delete(asignment) {
    const alert = await this.alert.create({
      header: 'Delete Asignment?',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.asignmentService.deleteAsignment(asignment.id);
          },
        },
      ],
    });
    await alert.present();
  }

}
