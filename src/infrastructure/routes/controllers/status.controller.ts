import type { Request, Response } from 'express';
import StatusHandler from '../handlers/status.handler';
import {
    HttpStatusCreated,
    HttpStatusOk,
    HttpStatusNoContent,
} from 'utils/http.protocols';

export default class StatusController {
    static async getStatusById(req: Request, res: Response) {
        const status = await StatusHandler.getStatusById(req);

        return new HttpStatusOk(res, status);
    }

    static async createStatus(req: Request, res: Response) {
        await StatusHandler.createStatus(req);

        return new HttpStatusCreated(res);
    }

    static async updateStatus(req: Request, res: Response) {
        await StatusHandler.updateStatus(req);

        return new HttpStatusNoContent(res);
    }

    static async deleteStatus(req: Request, res: Response) {
        await StatusHandler.deleteStatus(req);

        return new HttpStatusNoContent(res);
    }
}
