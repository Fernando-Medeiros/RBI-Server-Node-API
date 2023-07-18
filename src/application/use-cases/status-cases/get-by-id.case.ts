import type { IRequestToGetById } from 'core/requests.interface';
import type { IStatusRepository } from './common/status.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    req: IRequestToGetById,
    repository: IStatusRepository,
) => {
    const { id } = req.getRequestToGetById();

    const status = await repository.findById(id);

    if (!status) {
        throw new NotFound('Status not found!');
    }
    const {
        pubId,
        points,
        experience,
        strength,
        intelligence,
        dexterity,
        vitality,
        health,
        energy,
        currentHealth,
        currentEnergy,
    } = status;

    return {
        pubId,
        points,
        experience,
        strength,
        intelligence,
        dexterity,
        vitality,
        health,
        energy,
        currentHealth,
        currentEnergy,
    };
};
