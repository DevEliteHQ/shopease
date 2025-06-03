import { Model } from 'sequelize';
import { AutoIncrement, Column, DataType, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: true,
})
export default class Categories extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  category_id!: number;

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
}
