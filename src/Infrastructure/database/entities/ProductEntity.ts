import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Visibility } from '@domain/entities/Product';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ default: Visibility.Public })
  public visibility: string;

  @Column()
  public name: string;

  @Column()
  public imageUrl: string;

  @Column()
  public process_price: number;

  @Column()
  public description: string;

  @Column()
  public calc_type: string;

  @Column()
  public short_description: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  public created_at: string;

  @UpdateDateColumn({ default: null })
  public updated_at: string;
}
