import type { IRequestToGetById } from 'core/requests.interface';
import type { ISkillsRepository } from './common/skills.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    requests: IRequestToGetById,
    repository: ISkillsRepository,
) => {
    const { id } = requests.getRequestToGetById();

    const skills = await repository.findById(id);

    if (!skills) {
        throw new NotFound('Skills not found!');
    }

    const { pubId, offensive, defensive } = skills;

    return {
        pubId,
        offensive,
        defensive,
    };
};
