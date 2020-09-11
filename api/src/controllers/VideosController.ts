import { Request, Response } from 'express';

import db from '../database/connection';

class VideosController {
    async index(request: Request, response: Response) {
        const videos = await db.from('videos').select('*');

        return response.json(videos);
    }

    async create(request: Request, response: Response) {
        const { 
            name,
            description,
            url,
            thumbnail,
            views,
            created_at,
            channel_id
        } = request.body;
        
        try {
            await db.insert({
                name,
                description,
                url,
                thumbnail,
                views,
                created_at,
                channel_id
            });
        } catch {
            return response.status(400).json({ message: "Erro ao inserir vídeo." });
        }
        
        return response.status(200).json({ message: "Vídeo inserido com sucesso." });
    }
}

export default new VideosController();