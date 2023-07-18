import type { IRequestToCreate } from 'core/requests.interface';
import type { CreateCharacterDto } from './common/character.dto';
import type { ICharacterRepository } from './common/character.repository.interface';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    req: IRequestToCreate<CreateCharacterDto>,
    repository: ICharacterRepository,
) => {
    const { data } = req.getRequestToCreate();

    const { charName } = data;

    const charNameInUse = await repository.find({ charName });

    if (charNameInUse) {
        throw new BadRequest('Character name is already in use!');
    }

    await repository.save(data);
};
