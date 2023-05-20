import type { ICharacterRequestsToGetById } from '../repository/character.requests.interfaces';
import { CommonValidators } from 'app/validators/common.validators';

export class CharacterRequestsToGetById implements ICharacterRequestsToGetById {
    constructor(readonly payload: { id?: string }) {}

    getRequestToGetById(): { id: string } {
        const { id } = this.payload;

        CommonValidators.validateID(id);

        return { id: String(id) };
    }
}
