import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/core/models/task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task:Task;
  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(
  ) {

  } 
  getPeople() {
    return this.taskService.getTask()
  }

  sendTaskEdit(){
    this.onEdit.emit(this.task);
  }

  sendTaskDelete(){
    this.onDelete.emit(this.task);
  }

}
