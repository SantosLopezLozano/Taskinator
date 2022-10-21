import { Task } from './../model/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private task:Task[] = [
    {
      id:1,
      name:"1",
    },
    {
      id:2,
      name:"2",
    },
    {
      id:3,
      name:"3",
    },
    {
      id:4,
      name:"4",
    },
    {
      id:5,
      name:"5",
    }
  ];

  id:number = this.task.length+1;
  constructor() {

  }

  getTask(){
    return this.task;
  }
}
