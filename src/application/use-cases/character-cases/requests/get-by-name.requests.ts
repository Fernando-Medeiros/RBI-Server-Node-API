import type { ICharacterRequestsToGetByName } from '../repository/character.requests.interfaces';
import { CharacterValidators } from '../validators/validators';

export class CharacterRequestsToGetByName
    implements ICharacterRequestsToGetByName
{
    constructor(readonly payload: { name?: string }) {}

    getRequestToGetByName(): { name: string } {
        return {
            name: CharacterValidators.charName(String(this.payload.name)),
        };
    }
}
