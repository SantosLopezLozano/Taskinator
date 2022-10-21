import { Person } from './../../model/person';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

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

  //Esto es alertController, creas una constante que espera a que se llame y cuando se haga crea en controlador con las opciones de abajo
  async onDeleteAlert(person) {
    const alert = await this.alert.create({
      header: 'Delete Person?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancelled");
          },
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

  //Por algún motivo el deletePerson solo funciona si el aller controler está arriba, si está debajo da error
  deletePerson(person) {
    this.onDeleteAlert(person)
  }

  async personForm(person: Person) {
    const modal = await this.modal.create({
      component: PersonDetailComponent,
      componentProps: {
        person: person
      }
    });
    modal.present();
  }
}

