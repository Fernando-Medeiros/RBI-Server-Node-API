import type { IRequestToDelete } from 'core/requests.interface';
import type { ISkillsRepository } from './common/skills.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    requests: IRequestToDelete,
    repository: ISkillsRepository,
) => {
    const { id } = requests.getRequestToDelete();

    if (!(await repository.findByIdAndDelete(id))) {
        throw new NotFound('Skills not found!');
    }
};
