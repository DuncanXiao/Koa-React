module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Mail', {
		email: {
			type: DataTypes.CHAR(40),
			allowNull: false,
			primaryKey: true
		},
		password: {
			type: DataTypes.CHAR(40),
			allowNull: false
		}
	}, {
		timestamps: true,
		underscored: false,
		freezeTableName: true
	});
};