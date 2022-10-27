import { TasksComponent } from './components/tasks/tasks.component';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  imports: [
    CoreModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, 
                 HomeComponent, 
                 TasksComponent,
                 PeopleComponent,]
})
export class FolderPageModule {}
