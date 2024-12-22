import { Injectable } from '@nestjs/common';

import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(userId: number): Promise<Task[]> {
    return await this.prismaService.task.findMany({
      where: {
        userId,
      },
    });
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, description, userId } = createTaskInput;
    return await this.prismaService.task.create({
      data: {
        name,
        description,
        userId,
      },
    });
  }
}
