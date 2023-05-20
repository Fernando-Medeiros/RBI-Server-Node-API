import type { ISkillsRepository } from './repository/skills.repository.interfaces';
import type { ISkillsRequestsToDelete } from './repository/skills.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    requests: ISkillsRequestsToDelete,
    repository: ISkillsRepository,
) => {
    const { sub } = requests.getRequestToDelete();

    if (!(await repository.findByIdAndDelete(sub))) {
        throw new NotFound('Skills not found!');
    }
};
