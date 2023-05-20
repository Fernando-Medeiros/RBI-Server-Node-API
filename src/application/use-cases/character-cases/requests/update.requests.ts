import type { CharacterUpdateProps } from '../repository/character.props';
import type { ICharacterRequestsToUpdate } from '../repository/character.requests.interfaces';
import { CharacterValidators as validators } from '../validators/validators';
import { BadRequest } from 'utils/http.exceptions';

export class CharacterRequestsToUpdate implements ICharacterRequestsToUpdate {
    constructor(readonly payload: CharacterUpdateProps & { sub: string }) {}

    getRequestToUpdate(): { sub: string; toUpdate: CharacterUpdateProps } {
        const { sub, level, charName, className, gender } = this.payload;

        const toUpdate = {
            ...(level && { level: validators.level(level) }),
            ...(charName && { charName: validators.charName(charName) }),
            ...(className && { className: validators.className(className) }),
            ...(gender && { gender: gender }),
        };

        if (!Object.values(toUpdate).length) {
            throw new BadRequest('No data to be updated!');
        }

        return { sub, toUpdate };
    }
}
