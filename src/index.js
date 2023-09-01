import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta
app.use(express.json());

app.use(roteadorUsuario);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Luiz Eduardo Oliveira Mendes",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

dotenv.config();

app.use(roteadorLogin);