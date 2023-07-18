import type { IRequestToDelete } from 'core/requests.interface';
import type { ICharacterRepository } from './common/character.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    req: IRequestToDelete,
    repository: ICharacterRepository,
): Promise<void> => {
    const { id } = req.getRequestToDelete();

    const result = await repository.findByIdAndDelete(id);

    if (!result) {
        throw new NotFound('Character not found!');
    }
};
