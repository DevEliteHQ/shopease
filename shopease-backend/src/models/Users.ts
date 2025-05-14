import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  NotNull,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})

export default class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  user_id!: number;

  @Column(DataType.STRING)
  @NotNull
  name!: string;

  @Column(DataType.STRING)
  @NotNull
  @Unique
  email!: string;

  @Column(DataType.STRING)
  @NotNull
  password!: string;

  @Column(DataType.STRING)
  phone!: string;
}
