import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventRepository } from './event.repository';
import { EventEntity } from './entity/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), ConfigModule.forRoot()],
  controllers: [EventsController],
  providers: [EventsService, EventEntity, EventRepository,]
})
export class EventsModule {}
