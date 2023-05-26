import {
  createJogoService,
  findaAllJogosService,
} from "../service/service.jogos.js";

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
export { createJogoController, findaAllJogosController };
