import type { IRequestToCreate } from 'core/requests.interface';
import type { IStatusRepository } from './common/status.repository.interface';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    req: IRequestToCreate,
    repository: IStatusRepository,
) => {
    const { id } = req.getRequestToCreate();

    if (await repository.findById(id)) {
        throw new BadRequest('Only one status allowed per character!');
    }

    const status = {
        pubId: id,
        points: 15,
        experience: 1,
        strength: 1,
        intelligence: 1,
        dexterity: 1,
        vitality: 1,
        health: 1,
        energy: 1,
        currentHealth: 1,
        currentEnergy: 1,
    };

    await repository.save(status);
};
