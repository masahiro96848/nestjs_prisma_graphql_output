import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';

import { Task } from './task.model';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('description') description?: string,
  ): Task {
    return this.taskService.createTask(name, description);
  }
}
