import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { AppConfigModule } from 'Shared-Service/src/config/app-config.module';
import { databaseConnection } from 'Shared-Service/src/config/database-connection';

@Module({
  imports: [
    AppConfigModule,
    databaseConnection,
    UserModule,
    SchoolModule
  ],
})

export class AppModule { }