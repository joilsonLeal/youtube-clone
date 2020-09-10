import { Request, Response } from 'express';

import db from '../database/connection';

class VideosController {
    async index(request: Request, response: Response) {
        const videos = await db.from('videos').select('*');

        response.send(videos);
    }
}

export default new VideosController();