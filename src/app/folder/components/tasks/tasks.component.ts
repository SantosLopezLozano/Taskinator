import { TaskDetailComponent } from '../../../core/components/task-detail/task-detail.component';
import { TaskService } from '../../../core/services/task.service';
import { Task } from 'src/app/core/models/task';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() {}

  getTask() {
    return this.taskService.getTask();
  }

  newTask() {
    this.taskForm(null)
  }

  editTask(task){
    this.taskForm(task)
  }

  deleteTask(task) {
    this.Delete(task)
  }

  //////////////////////////////////ALLERT CONTROLLER/////////////////////////////////////////////////////////////////////////////////////
  async Delete(task) {
    const alert = await this.alert.create({
      header: 'Delete Task?',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.taskService.deleteTask(task.id);
          },
        },
      ],
    });
    await alert.present();
  }


  //////////////////////////////////////////FORMULARIO////////////////////////////////////////////////////////////
  async taskForm(task: Task) {
    const modal = await this.modal.create({
      component: TaskDetailComponent,
      componentProps: {
        task: task
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskService.editTask(result.data.task);
            break;
          default:
        }
      }
    });
  }

}
