import type { ICharacterRepository } from './repository/character.repository.interfaces';
import type { ICharacterRequestsToGetByName } from './repository/character.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const getByNameCase = async (
    requests: ICharacterRequestsToGetByName,
    repository: ICharacterRepository,
) => {
    const { name } = requests.getRequestToGetByName();

    const character = await repository.findByName(name);

    if (!character) {
        throw new NotFound('Character not found!');
    }

    const { pubId, level, charName, className, gender } = character;

    return { pubId, level, charName, className, gender };
};
