import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {

  }

  getPeople(){
    return this.peopleService.getPeople();
  }

  /*newPerson(){
    this.personForm(null)
  }*/

}
