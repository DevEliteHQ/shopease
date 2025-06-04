import { Model } from 'sequelize';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import Categories from './Categories';

@Table({
  tableName: 'products',
  timestamps: true,
})
export default class Products extends Model<Products> {
  @PrimaryKey
  @AutoIncrement
  @Column
  product_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price!: number;

  @ForeignKey(() => Categories)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  category_id!: number;

  @BelongsTo(() => Categories, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL', // Optional but recommended
    onUpdate: 'CASCADE',
  })
  category?: Categories;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  stock!: number;
}
