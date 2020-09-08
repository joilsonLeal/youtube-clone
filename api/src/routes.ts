import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.get('/',  (req, res) => {
    return res.json({ message: 'youtube-clone' });
});

routes.post('/users', async (req, res) => {
    const { username, password, avatar } = req.body;

    await db('users').insert({
        username,
        password,
        avatar,
    });

    return res.json({ok: 'ok'});
});

export default routes;