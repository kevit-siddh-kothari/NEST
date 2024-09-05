import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventRepository } from './event.repository';
import { EventEntity } from './entity/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = true;

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), ConfigModule.forRoot()],
  controllers: [EventsController],
  providers: [
    { provide: 'SERVICE', useClass: EventsService }, //if provide and userclass are same then no need to use @inject decorator
    { provide: EventEntity, useClass: EventEntity },
    EventRepository,
    {
      provide: 'EVENT_STORE',
      useFactory: (limit: number) => {
        console.log(limit);
        return IS_DEV_MODE
          ? new ReplaySubject(limit)
          : new BehaviorSubject(null);
      },
      inject: ['LIMIT'],
    },
    {
      provide: 'LIMIT',
      useValue: 6,
    },
  ],
})
export class EventsModule {}


 
