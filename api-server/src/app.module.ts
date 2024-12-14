import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),
    TaskModule,
    AuthModule,
    // ConfigModule.forRoot({
    //   isGlobal: true, // ConfigModuleをグローバルにすることで、他のモジュールで再インポート不要
    //   envFilePath: '.env', // デフォルトで'.env'を読み込むので省略可能
    // }),
  ],
})
export class AppModule {}
