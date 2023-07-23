import type { Request, Response } from 'express';
import CharacterHandler from '../handlers/character.handler';
import {
    HttpStatusCreated,
    HttpStatusOk,
    HttpStatusNoContent,
} from 'utils/http.protocols';

export default class CharacterController {
    static async getCharacterById(req: Request, res: Response) {
        const character = await CharacterHandler.getCharacterById(req);

        return new HttpStatusOk(res, character);
    }

    static async createCharacter(req: Request, res: Response) {
        await CharacterHandler.createCharacter(req);

        return new HttpStatusCreated(res);
    }

    static async updateCharacter(req: Request, res: Response) {
        await CharacterHandler.updateCharacter(req);

        return new HttpStatusNoContent(res);
    }

    static async deleteCharacter(req: Request, res: Response) {
        await CharacterHandler.deleteCharacter(req);

        return new HttpStatusNoContent(res);
    }
}
