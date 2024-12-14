import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { AuthLoginService } from './auth.service';
import { FirebaseModule } from '../libs/firebase/firebase.module';

@Module({
  imports: [PassportModule, FirebaseModule],
  providers: [AuthLoginService, AuthResolver],
})
export class AuthModule {}
