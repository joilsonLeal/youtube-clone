import express from 'express';

import UsersController from './controllers/UsersController';

const routes = express.Router();

routes.post('/users', UsersController.create);

export default routes;