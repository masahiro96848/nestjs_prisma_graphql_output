import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthLoginService } from './auth.service';
import { Auth } from './auth.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authLoginService: AuthLoginService) {}

  @Mutation(() => Auth)
  async login() {
    const dummyUserId = 'hogehoge';
    return this.authLoginService.login(dummyUserId);
  }
}
