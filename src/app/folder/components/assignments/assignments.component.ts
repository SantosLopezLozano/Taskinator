import { AssignmentDetailComponent } from './../../../core/components/assignment-detail/assignment-detail.component';
import { AsignmentComponent } from './../../../core/components/assignment/assignment.component';
import { AsignmentService } from 'src/app/core/services/asignments';
import { Asignment } from 'src/app/core/models/asignments';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {

  constructor(
    private asignmentService: AsignmentService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() {}

  getAsignment() {
    return this.asignmentService.getAsignment();
  }

  newAsignment() {
    this.asignmentForm(null)
  }

  editasignment(asignment){

  }

  deleteAsignment(asignment){

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
