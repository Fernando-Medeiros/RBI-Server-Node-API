import type { IRequestToGetById } from 'core/requests.interface';
import type { ICharacterRepository } from './common/character.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    req: IRequestToGetById,
    repository: ICharacterRepository,
) => {
    const { id } = req.getRequestToGetById();

    const character = await repository.findById(id);

    if (!character) {
        throw new NotFound('Character not found!');
    }

    const { pubId, level, charName, className, gender } = character;

    return { pubId, level, charName, className, gender };
};
