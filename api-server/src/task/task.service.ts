import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, description } = createTaskInput;
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.description = description;
    this.tasks.push(newTask);
    return newTask;
  }
}
