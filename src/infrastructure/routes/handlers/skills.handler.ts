import type { Request } from 'express';
import { SkillsRepository } from '../repositories/skills.repository.impl';
import { SkillsRequests } from '../requests/skills.request.impl';
import { createCase } from 'app/use-cases/skills-cases/create.case';
import { deleteCase } from 'app/use-cases/skills-cases/delete.case';
import { updateCase } from 'app/use-cases/skills-cases/update.case';
import { getByIdCase } from 'app/use-cases/skills-cases/get-by-id.case';

export default class SkillsHandler {
    private static readonly Repository = new SkillsRepository();

    static async getSkillsById(req: Request) {
        return getByIdCase(
            new SkillsRequests({ ...req.params, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    static async createSkills(req: Request) {
        return createCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    static async deleteSkills(req: Request) {
        return deleteCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    static async updateSkills(req: Request) {
        return updateCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }
}
