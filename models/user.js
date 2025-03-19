const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

(async () => {
  await sequelize.sync({ force: true }); // DANGER: Deletes & recreates table!
  console.log('✅ Users table created successfully.');
})();

module.exports = User;

