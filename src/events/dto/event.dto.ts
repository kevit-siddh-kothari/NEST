import { Injectable } from "@nestjs/common";
import { IsDate, IsNumber, IsString, Length, MaxLength, IsDateString } from "class-validator";

export class EventDto {

    @IsNumber()
    readonly id: number;

    @IsString({message:'Please Enter string'})
    @Length(1,20,{message:`Please Enter name in valid length`})
    readonly name: string;
 
    @IsString({message:'Please Enter string'})
    readonly description: string;

    @IsDateString()
    readonly when: string;

    @IsString({message:'Please Enter string'}) 
    readonly address: string;

};