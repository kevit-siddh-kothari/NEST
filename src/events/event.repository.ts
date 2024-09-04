import { Repository } from 'typeorm';
import { EventEntity } from './entity/event.entity';
import { InjectRepository } from '@nestjs/typeorm';


export class EventRepository {
  constructor( @InjectRepository(EventEntity)
    private eventRep: Repository<EventEntity>
) {}

  public async AddEvent(event){
    return await this.eventRep.save(event);
  }  
  public async findAllEvents() {
    console.log('hi')
    return await this.eventRep.find();
  }

  public async findEventsById(id1: number) {
    return await this.eventRep.findOneBy({'id':id1});
  }

  public async deleteEventById(id: number) {
    return await this.eventRep.delete({id:id});
  }

  public async updateEventById(updatedEvent, id1: number) {
    const event =  await this.eventRep.findOneBy({'id':id1});
    if(!event){
        throw new Error(`no event exits`);
    }
    Object.assign(event, updatedEvent);
    return await this.eventRep.save(event);
  }
}
