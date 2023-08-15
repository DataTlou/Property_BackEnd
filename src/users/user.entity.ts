import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,  } from 'typeorm'
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
}
