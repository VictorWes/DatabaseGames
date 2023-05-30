import User from "../models/Jogos.js";

const createJogoService = (body) => User.create(body);
const findaAllJogosService = () => User.findAll();
const findOneJogoService = (id) => User.findByPk(id);
const updateTeste = (nomeJogo, id) => User.update({nomeJogo}, { where: { id: id } });
const deleteJogoService = (id) => User.destroy({ where: { id: id } });

export {
  createJogoService,
  findaAllJogosService,
  findOneJogoService,
  deleteJogoService,
  updateTeste,
};
