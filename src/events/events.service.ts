import { Injectable, Scope } from '@nestjs/common';
import { EventEntity } from './entity/event.entity';
import { UpdateEventDto } from './dto/event-update.dto';
import { EventRepository } from './event.repository';

@Injectable({
  scope: Scope.REQUEST
})
export class EventsService {

  constructor(private eventRepo: EventRepository) {
     console.log(`event module initialised for new request`);
  }

  public async AddEvents(event) {
     return await this.eventRepo.AddEvent(event);
  }  

  public async findAllEvents() {
    console.log(process.env.NODE_ENV);
    return await this.eventRepo.findAllEvents();
  }  

  public async findEventsById(id: number){
    return await this.eventRepo.findEventsById(id);
  }

  public async deleteEventById(id: number) {
    return await this.eventRepo.deleteEventById(id);
  }

  
  public async updateEventById(updatedEvent, id1: number) {
    return await this.eventRepo.updateEventById(updatedEvent, id1);
  }
}
