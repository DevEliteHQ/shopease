import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // This adds createdAt and updatedAt automatically
})
export default class Users extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
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

// user.model.ts
// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../config/database'; // Adjust the path as necessary

// export class User extends Model {
//   public user_id!: number;
//   public name!: string;
//   public email!: string;
//   public password!: string;
//   public phone?: string;
// }

// User.init(
//   {
//     user_id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phone: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users',
//     timestamps: true,
//   },
// );
