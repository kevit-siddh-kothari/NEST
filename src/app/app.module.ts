import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from '../events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/events/entity/event.entity';
import { ConfigModule } from '@nestjs/config';

/**
DB_HOST = '127.0.0.1'
PORT =  3307
TYPE = 'mysql'
ROOT = 'root'
PASSWORD = 'Root@72003'
DATABASE = 'nest_events'
 */


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.ROOT,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [EventEntity],
      synchronize: true,
    }),
    EventsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
