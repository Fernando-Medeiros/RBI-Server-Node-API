import type { Request, Response } from 'express';
import SkillsHandler from '../handlers/skills.handler';
import {
    HttpStatusCreated,
    HttpStatusOk,
    HttpStatusNoContent,
} from 'utils/http.protocols';

export default class SkillsController {
    static async getSkillsById(req: Request, res: Response) {
        const skills = await SkillsHandler.getSkillsById(req);

        return new HttpStatusOk(res, skills);
    }

    static async createSkills(req: Request, res: Response) {
        await SkillsHandler.createSkills(req);

        return new HttpStatusCreated(res);
    }

    static async updateSkills(req: Request, res: Response) {
        await SkillsHandler.updateSkills(req);

        return new HttpStatusNoContent(res);
    }

    static async deleteSkills(req: Request, res: Response) {
        await SkillsHandler.deleteSkills(req);

        return new HttpStatusNoContent(res);
    }
}
