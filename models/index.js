const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('all-india', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log("Error: " + err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false, match: /all-india$/ }).then(() => { console.log("yes re-sync"); });
db.users = require('./users')(sequelize, DataTypes);

module.exports = db;