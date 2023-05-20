import type { ISkillsRepository } from './repository/skills.repository.interfaces';
import type { ISkillsRequestsToUpdate } from './repository/skills.requests.interfaces';

export const updateCase = async (
    requests: ISkillsRequestsToUpdate,
    repository: ISkillsRepository,
) => {
    const { sub, toUpdate } = requests.getRequestToUpdate();

    await repository.findByIdAndUpdate(sub, toUpdate);
};
