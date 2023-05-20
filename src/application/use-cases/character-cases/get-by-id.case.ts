import type { ICharacterRepository } from './repository/character.repository.interfaces';
import type { ICharacterRequestsToGetById } from './repository/character.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    requests: ICharacterRequestsToGetById,
    repository: ICharacterRepository,
) => {
    const { id } = requests.getRequestToGetById();

    const character = await repository.findById(id);

    if (!character) {
        throw new NotFound('Character not found!');
    }

    const { pubId, level, charName, className, gender } = character;

    return { pubId, level, charName, className, gender };
};
