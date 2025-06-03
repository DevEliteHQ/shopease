import { Model } from 'sequelize';
import { AutoIncrement, Column, DataType, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
})
export default class Products extends Model {
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

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  category_id!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  stock!: number;

  
}
