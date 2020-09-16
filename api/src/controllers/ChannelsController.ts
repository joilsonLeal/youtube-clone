import { Request, Response } from 'express';

import db from '../database/connection';

class ChannelsController {
    async index(request: Request, response: Response) {
        const channels = await db.from('channels').select('*');

        return response.json(channels);
    }

}

export default new ChannelsController();