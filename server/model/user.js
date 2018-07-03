import { sequelize } from 'Sql/index';
import Sequelize from 'sequelize';
import Email from './email';

const userModel = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.CHAR(40),
    allowNull: false
  },
  name: {
    type: Sequelize.CHAR(40),
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: false,
  freezeTableName: true
});

userModel.belongsTo(Email, {foreignKey: 'email'});

export default userModel;