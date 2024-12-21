import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TaskModule,
    ConfigModule.forRoot({
      isGlobal: true, // ConfigModuleをグローバルにすることで、他のモジュールで再インポート不要
      envFilePath: '.env', // デフォルトで'.env'を読み込むので省略可能
    }),
    PrismaModule,
  ],
})
export class AppModule {}
