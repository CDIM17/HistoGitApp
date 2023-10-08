import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environment from './environment/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
    }),
  ],
  exports: [ConfigModule],
})
export class AppConfigModule {}
