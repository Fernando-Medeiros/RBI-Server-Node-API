import type { CharacterCreateProps } from '../repository/character.props';
import type { ICharacterRequestsToCreate } from '../repository/character.requests.interfaces';
import { CharacterValidators as validators } from '../validators/validators';

export class CharacterRequestsToCreate implements ICharacterRequestsToCreate {
    constructor(readonly payload: CharacterCreateProps & { sub: string }) {}

    getRequestToCreate(): { sub: string; toCreate: CharacterCreateProps } {
        const { sub, charName, className } = this.payload;

        const toCreate = {
            charName: validators.charName(charName),
            className: validators.className(className),
        };

        return { sub, toCreate };
    }
}
