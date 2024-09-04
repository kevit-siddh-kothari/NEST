import { Injectable, Optional} from "@nestjs/common";
import { IsString, MaxLength } from "class-validator";
import {PartialType} from "@nestjs/mapped-types"
import { EventDto } from "./event.dto";


export class UpdateEventDto extends  PartialType(EventDto){

    // * Here partialtype make all properties of eventdto class optional
    // @IsString()
    // @Optional()
    // readonly name?: string;

    // @IsString()
    // @Optional()
    // readonly description?: string;

    // @IsString()
    // @Optional()
    // readonly when?: string;

    // @IsString()
    // @Optional()
    // readonly address?: string;

};