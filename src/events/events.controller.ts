import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Req, Res } from '@nestjs/common';
import { EventsService } from './events.service';
import {EventDto} from './dto/event.dto';
import {UpdateEventDto} from './dto/event-update.dto';
import { EventEntity } from './entity/event.entity';
import { Response } from 'express';


@Controller('/app')
export class EventsController {
   
    constructor( @Inject('SERVICE') private eventService:EventsService ){
        console.log(`Controller initialised !`);
    }

    @Get('/events')
    public async getEvent( @Res() res:Response):Promise<any>{
       try{
         return res.status(200).json(await this.eventService.findAllEvents());
       }catch(error: any){
         return res.status(500).json({error:error.message});
       }       
    };

    @Post('/events')
    public async postEvent(@Body() input: EventDto, @Res() res:Response):Promise<void> {
        console.log( await this.eventService.AddEvents(input));
        const events = await this.eventService.findAllEvents();
        res.status(201).json(events)
    };

    @Get('/events/:id')
    @HttpCode(200)
    public async getEventsById(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id:number , @Res() res:Response):Promise<void>{ 
        const event: EventEntity = await this.eventService.findEventsById(id);
        res.status(200).json(event);
    };

    @Get('/events-organised-by-user/:id')
    public async getEventsByUser(@Param('id') id:number , @Res() res:Response):Promise<void>{
        const event: EventEntity = await this.eventService.findEventsById(id);
        res.json({name: event.name});
    };

    @Delete('/events/:id')
    public async deleteEventsByUser(@Param('id') id:number, @Res() res:Response):Promise<void>{
        await this.eventService.deleteEventById(id);
        res.status(200).json({message: `Event deleted sucessfully !`});
    };

    @Patch('/event/:id')
    public async updateEventByUser(@Body() input: UpdateEventDto, @Param('id') id:number, @Res() res:Response ):Promise<void>{
        const arr = await this.eventService.updateEventById(input, Number(id));
        res.json({message: arr});
    }

};
