import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // This adds createdAt and updatedAt automatically
})
export default class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  user_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone?: string;
}