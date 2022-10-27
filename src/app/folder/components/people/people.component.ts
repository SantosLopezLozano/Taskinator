import { PeopleService } from './../../../core/services/people.service';
import { Person } from '../../../core/models/person';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../../../core/components/person-detail/person-detail.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() {

  }

  getPeople() {
    return this.peopleService.getPeople();
  }

  newPerson() {
    this.personForm(null)
  }

  editPerson(person){
    this.personForm(person)
  }

  deletePerson(person) {
    this.Delete(person)
  }




  //////////////////////////////////ALLERT CONTROLLER/////////////////////////////////////////////////////////////////////////////////////
  async Delete(person) {
    const alert = await this.alert.create({
      header: 'Delete Person?',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.peopleService.deletePerson(person.id);
          },
        },
      ],
    });
    await alert.present();
  }


  //////////////////////////////////////////FORMULARIO////////////////////////////////////////////////////////////
  async personForm(person: Person) {
    const modal = await this.modal.create({
      component: PersonDetailComponent,
      componentProps: {
        person: person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.peopleService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.peopleService.editPerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
}

