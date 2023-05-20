import type { IStatusRepository } from './repository/status.repository.interfaces';
import type { IStatusRequestsToCreate } from './repository/status.requests.interfaces';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    requests: IStatusRequestsToCreate,
    repository: IStatusRepository,
) => {
    const { sub } = requests.getRequestToCreate();

    if (await repository.findById(sub)) {
        throw new BadRequest('Only one status allowed per character!');
    }

    const status = {
        pubId: sub,
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
