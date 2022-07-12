'use strict'

// Dependências gerais
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/index.js";

// Rotas a serem adicionadas
import cart_product_router from "./routes/cart_product.route.js";

// Aplicação
const app = express();

// Opções de CORS
const cors_options = {
  origin: "http://localhost:3000"
};
app.use(cors(cors_options));

// Opções de manipulação de corpos de requisição/resposta
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Roteamento
app.use("/cart_products", cart_product_router);

// Conexão à base de dados
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Porta a ser utilizada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Exportação da aplicação
export default app;