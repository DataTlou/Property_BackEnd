import {Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Entity} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Properties
{
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    Num_Room: Number

    @Column()
    Address: string

    @ManyToOne(() => User, user => user.properties)
    Owner: User
}