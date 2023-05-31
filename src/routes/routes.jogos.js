import { Router } from "express";
import {
  createJogoController,
  findaAllJogosController,
  findOneJogoController,
  deleteJogoController,
  updateJogosController,
} from "../controller/controller.jogos.js";

const routerJogos = Router();

routerJogos.patch("/testea/:id", updateJogosController);
routerJogos.delete("/jogo/:id", deleteJogoController);
routerJogos.post("/jogos", createJogoController);
routerJogos.get("/jogos", findaAllJogosController);
routerJogos.get("/jogo/:id", findOneJogoController);

export default routerJogos;
