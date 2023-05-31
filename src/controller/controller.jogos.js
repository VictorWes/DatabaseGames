import {
  createJogoService,
  findaAllJogosService,
  findOneJogoService,
  deleteJogoService,
  updateJogoService,
} from "../service/service.jogos.js";
import User from "../models/Jogos.js";
const createJogoController = async (req, res) => {
  try {
    let { nomeJogo, genero, lancamento } = req.body;

    if (!nomeJogo || !genero || !lancamento) {
      return res
        .status(400)
        .send({ message: "Por favor preencha os campos corretamente" });
    }

    const create = await createJogoService(req.body);

    res.status(200).send(create);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findaAllJogosController = async (req, res) => {
  try {
    const findAllJogos = await findaAllJogosService();

    if (findAllJogos <= 0) {
      return res
        .status(400)
        .send({ message: "Não existem jogos a serem mostrados" });
    }

    res.status(200).send(findAllJogos);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findOneJogoController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findOneJogoService(id);

    if (!findId) {
      return res.status(400).send({ message: "Usuario não localizado" });
    }

    res.status(200).send(findId);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



const deleteJogoController = async (req, res) => {
  try {
    let { id } = req.params;

    const deleteGame = await deleteJogoService(id);

    res.status(200).send({ message: "Jogo deletado com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateJogosController = async (req, res) => {
  try {
    let { id } = req.params;
    let { nomeJogo } = req.body;
    let findIdS = await User.findByPk(id);

    const atualizar = await updateJogoService(nomeJogo, id);

    res.status(200).send({ message: "Teste passou com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export {
  createJogoController,
  findaAllJogosController,
  findOneJogoController,

  deleteJogoController,
  updateJogosController,
};
