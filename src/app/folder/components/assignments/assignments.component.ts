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

  editasignment(asignment){

  }

  deleteAsignment(asignment){

  }

}
