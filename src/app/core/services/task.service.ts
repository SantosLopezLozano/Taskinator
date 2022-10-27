import { Task } from '../models/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private task:Task[] = [
    {
      id:1,
      name:"Kill Joe",
    },
    {
      id:2,
      name:"Kill Nao",
    },
    {
      id:3,
      name:"Protect Sara",
    },
    {
      id:4,
      name:"Kill Q-Taro",
    },
    {
      id:5,
      name:"Save Everyone",
    }
  ];

  id:number = this.task.length+1;
  constructor() {

  }

  getTask(){
    return this.task;
  }

  getTaskById(id:number){
    return this.task.find(p=>p.id==id);
  }

  deleteTask(id:number) {
    this.task = this.task.filter(p=>p.id != id); 
  }

  editTask(task:Task){
    var task = this.task.find(p=>p.id==task.id);
    if(task){
      task.name = task.name;
      task.picture = task.picture;
    }
  }
  addTask(task:Task){
    task.id = this.id++;
    this.task.push(task);
  }
}
