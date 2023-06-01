import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const database = new Sequelize(
  "DatabaseGames",
  process.env.NOME_SERVER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  await database.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default database;
