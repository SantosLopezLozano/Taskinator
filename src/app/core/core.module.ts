import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AsignmentComponent } from './components/assignment/assignment.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskComponent } from './components/task/task.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PersonComponent,
    TaskComponent,
    TaskDetailComponent,
    PersonDetailComponent,
    AsignmentComponent,
    AssignmentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonComponent,
    TaskComponent,
    TaskDetailComponent,
    PersonDetailComponent,
    AsignmentComponent,
    AssignmentDetailComponent
  ]
})
export class CoreModule { }
