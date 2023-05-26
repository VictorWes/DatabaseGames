import Sequelize from "sequelize";

const database = new Sequelize("DatabaseGames", "root", "drago200", {
  host: "localhost",
  dialect: "mysql",
});

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
export default database;
