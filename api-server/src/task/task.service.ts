import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(name: string, description?: string): Task {
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.description = description;
    this.tasks.push(newTask);
    return newTask;
  }
}
