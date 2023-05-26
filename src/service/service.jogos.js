import User from "../models/Jogos.js";

const createJogoService = (body) => User.create(body);
const findaAllJogosService = () =>  User.findAll();


export { createJogoService, findaAllJogosService };
