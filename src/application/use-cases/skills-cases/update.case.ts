import type { IRequestToUpdate } from 'core/requests.interface';
import type { ISkillsRepository } from './common/skills.repository.interface';
import type { UpdateSkillsDto } from './common/skills.dto';

export const updateCase = async (
    requests: IRequestToUpdate<UpdateSkillsDto>,
    repository: ISkillsRepository,
) => {
    const { id, data } = requests.getRequestToUpdate();

    await repository.findByIdAndUpdate(id, data);
};
