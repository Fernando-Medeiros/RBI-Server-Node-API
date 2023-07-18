import { CommonValidators } from 'utils/common.validators';
import type { ICharacterRequestsToGetById } from '../repository/character.requests.interfaces';

export class CharacterRequestsToGetById implements ICharacterRequestsToGetById {
    constructor(readonly payload: { id?: string }) {}

    getRequestToGetById(): { id: string } {
        const { id } = this.payload;

        CommonValidators.validateUUID(id);

        return { id: String(id) };
    }
}
