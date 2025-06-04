import { Model } from 'sequelize';
import { AutoIncrement, Column, DataType, PrimaryKey, Table } from 'sequelize-typescript';

export interface CategoriesAttributes {
  category_id?: number;
  name: string;
  description?: string;
}

export interface CategoriesCreationAttributes extends Omit<CategoriesAttributes, 'category_id'> {}

@Table({
  tableName: 'categories',
  timestamps: true,
})
export default class Categories
  extends Model<CategoriesAttributes, CategoriesCreationAttributes>
  implements CategoriesAttributes
{
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
