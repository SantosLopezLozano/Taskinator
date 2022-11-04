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
      picture:"https://pbs.twimg.com/media/E4wmQ2PX0AgDvcl.png"
    },
    {
      id:2,
      name:"Kill Nao",
      picture:"https://i1.sndcdn.com/artworks-Y6zixZ1BUNkzH2vv-z3Xtmw-t500x500.jpg"
    },
    {
      id:3,
      name:"Protect Sara",
      picture:"https://pbs.twimg.com/media/E4wmQ2QXEAI9d9C.png"
    },
    {
      id:4,
      name:"Kill Q-Taro",
      picture:"https://s4.anilist.co/file/anilistcdn/character/large/b169140-uhdXOlC42HgD.png"
    },
    {
      id:5,
      name:"Save Everyone",
      picture:"https://i.pinimg.com/originals/ef/a1/9e/efa19ef52347c5d0cb54a1767cf82b4b.png"
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

  editTask(_task:Task){
    var task = this.task.find(p=>p.id==_task.id);
    if(task){
      task.name = _task.name;
      task.picture = _task.picture;
    }
  }
  addTask(task:Task){
    task.id = this.id++;
    this.task.push(task);
  }
}
