import express from "express";
import routerJogos from "./src/routes/routes.jogos.js";
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.use("/teste", routerJogos);
app.use("/create", routerJogos);
app.use("/findall", routerJogos);
app.use("/find", routerJogos);
app.use("/jogo", routerJogos);

app.use("/delete", routerJogos);
