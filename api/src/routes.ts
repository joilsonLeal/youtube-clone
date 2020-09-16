import express from 'express';

import UsersController from './controllers/UsersController';
import VideosController from './controllers/VideosController';
import ChannelsController from './controllers/ChannelsController';

const routes = express.Router();

routes.post('/users', UsersController.create);

routes.get('/videos', VideosController.index);
routes.post('/videos', VideosController.create);

routes.get('/channels', ChannelsController.index);

export default routes;