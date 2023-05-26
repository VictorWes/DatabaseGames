import Sequelize from "sequelize";
import database from "../database/db.js";

const User = database.define("Jogos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nomeJogo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lancamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// User.sync()

export default User;
