import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,  OneToMany} from 'typeorm'
import { Properties } from './properties.entity'
@Entity()
export class User 
{
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    cellnumber: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Properties, properties => properties.Owner)
    properties: []
}
