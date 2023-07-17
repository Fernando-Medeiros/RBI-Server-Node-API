import type { IRequestToCreate } from 'core/requests.interface';
import type { ISkillsRepository } from './common/skills.repository.interface';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    req: IRequestToCreate,
    repository: ISkillsRepository,
) => {
    const { id } = req.getRequestToCreate();

    if (await repository.findById(id)) {
        throw new BadRequest('Only one Skills allowed per character!');
    }

    const skills = {
        pubId: id,
        offensive: [],
        defensive: [],
    };

    await repository.save(skills);
};
