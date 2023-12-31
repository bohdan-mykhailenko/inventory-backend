/* eslint-disable indent */
import {
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  Table,
  Column,
} from 'sequelize-typescript';
import { Order } from './orders.model';

@Table({
  tableName: 'products',
  timestamps: false,
})
export class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  serialNumber!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isNew!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isRepairing!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.TEXT,
  })
  specification!: string;

  @Column({
    type: DataType.JSONB,
  })
  guarantee!: {
    start: string;
    end: string;
  };

  @Column({
    type: DataType.JSONB,
  })
  price!: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'order_id',
    onDelete: 'CASCADE',
  })
  order_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date!: string;

  @BelongsTo(() => Order, {
    onDelete: 'RESTRICT',
    foreignKey: 'order_id',
  })
  order!: Order;
}
