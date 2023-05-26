import { Router } from "express";
import {
  createJogoController,
  findaAllJogosController,
} from "../controller/controller.jogos.js";

const routerJogos = Router();

routerJogos.post("/jogos", createJogoController);
routerJogos.get("/jogos", findaAllJogosController)

export default routerJogos;
