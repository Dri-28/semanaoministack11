const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);















/*Rota e recurso*/

/**
 * Metodo HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação  no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */
/**
 * Tipos de parametros:
 * 
 * Query  Params: Parâmetros  nomeados enviados na rota após simbolo de ?(Filtros,paginação)
 * Route  Params: Parâmetros utilizados para identificar recursos
 * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQlite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NoSQL : MongoDB, CoughDB, etc
  */

  /**
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table ('users'). select('*').where()
   */



