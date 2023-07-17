import type { Request } from 'express';
import { SkillsRepository } from 'infra/repositories/skills.repository.impl';
import { SkillsRequests } from 'infra/routes/requests/skills.request.impl';
import { createCase } from 'app/use-cases/skills-cases/create.case';
import { deleteCase } from 'app/use-cases/skills-cases/delete.case';
import { updateCase } from 'app/use-cases/skills-cases/update.case';
import { getByIdCase } from 'app/use-cases/skills-cases/get-by-id.case';

export class SkillsHandler {
    private static readonly Repository = new SkillsRepository();

    async getSkillsById(req: Request) {
        return await getByIdCase(
            new SkillsRequests({ ...req.params, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    async createSkills(req: Request) {
        return await createCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    async deleteSkills(req: Request) {
        return await deleteCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }

    async updateSkills(req: Request) {
        return await updateCase(
            new SkillsRequests({ ...req.headers, ...req.body }),
            SkillsHandler.Repository,
        );
    }
}
