import type { IRequestToUpdate } from 'core/requests.interface';
import type { UpdateCharacterDto } from './common/character.dto';
import type { ICharacterRepository } from './common/character.repository.interface';
import { BadRequest, NotFound } from 'utils/http.exceptions';

export const updateCase = async (
    req: IRequestToUpdate<UpdateCharacterDto>,
    repository: ICharacterRepository,
) => {
    const { id, data } = req.getRequestToUpdate();

    const { charName } = data;

    const charNameInUse = charName && (await repository.find({ charName }));

    if (charNameInUse) {
        throw new BadRequest('Character name is already in use!');
    }

    const result = await repository.findByIdAndUpdate(id, data);

    if (!result) {
        throw new NotFound('Character not found!');
    }
};
