import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('events')
export class EventEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{name:'name'})
    name: string;

    @Column('varchar',{name: 'description'})
    description: string;

    @Column('varchar',{name: 'address'})
    address: string;

    @Column('datetime',{name:'when_date'})
    when: Date;
}