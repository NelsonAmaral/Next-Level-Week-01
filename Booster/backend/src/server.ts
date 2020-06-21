import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

 

// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Busca uma ou mais informações do back-end
// POST: Criar uma nova insformação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuário
// GET http://localhost:3333/users/5 = Busca dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param:  Parâmetros que vem na própria rota gearalmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de insformações
