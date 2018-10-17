module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mail', {
    email: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      primaryKey: true,
      validate: {
        isEmail: {
          msg: "Must be an correct email"
        }
      }
    },
    password: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      validate: {
        isEven: function(val) {
          if (val.length < 5 || val.length > 8) {
            throw new Error('The password must be larger than 6 and less than 8')
          }
        }
      }
    }
  }, {
    timestamps: true,
    underscored: false,
    freezeTableName: true
  });
}