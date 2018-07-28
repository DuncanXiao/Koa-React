import { sequelize } from 'Sql/index';
import Sequelize from 'sequelize';

const emailModel = sequelize.define('Mail', {
  email: {
    type: Sequelize.CHAR(40),
    allowNull: false,
    primaryKey: true,
    validate: {
      isEmail: {
        msg: "Must be an correct email"
      }
    }
  },
  password: {
    type: Sequelize.CHAR(40),
    allowNull: false,
    validate: {
      isEven: function(val) {
        if (val.length < 5 || val.length > 8) {
          throw new Error('The password must be larger than 6 and less than 8')
        }
      }
    }
  },
  state: { type: Sequelize.INTEGER(4), defaultValue: 0 },
  code: { type: Sequelize.CHAR(40), allowNull: false }
}, {
  timestamps: true,
  underscored: false,
  freezeTableName: true
});

export default emailModel;