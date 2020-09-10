import express from 'express';

import UsersController from './controllers/UsersController';
import VideosController from './controllers/VideosController';

const routes = express.Router();

routes.post('/users', UsersController.create);

routes.get('/videos', VideosController.index);

export default routes;