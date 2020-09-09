import { Request, Response } from 'express';

import db from '../database/connection';

class ClassesController {
    async index(request: Request, response: Response) {
        
    }

    async create(request: Request, response: Response) {
        const { username, password, avatar } = request.body;

        await db('users').insert({
            username,
            password,
            avatar,
        });
    
        return response.status(201).send();
    }
}

export default new ClassesController();