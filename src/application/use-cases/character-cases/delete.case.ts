import type { ICharacterRepository } from './repository/character.repository.interfaces';
import type { ICharacterRequestsToDelete } from './repository/character.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    requests: ICharacterRequestsToDelete,
    repository: ICharacterRepository,
): Promise<void> => {
    const { sub } = requests.getRequestToDelete();

    const result = await repository.findByIdAndDelete(sub);

    if (!result) {
        throw new NotFound('Character not found!');
    }
};
