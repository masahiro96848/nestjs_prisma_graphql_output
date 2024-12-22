import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/createUser.input';
import { User as UserModel } from './models/user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserModel> {
    return await this.userService.createUser(createUserInput);
  }
}
