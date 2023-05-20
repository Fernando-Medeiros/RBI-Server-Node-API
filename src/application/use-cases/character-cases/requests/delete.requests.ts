import type { ICharacterRequestsToDelete } from '../repository/character.requests.interfaces';

export class CharacterRequestsToDelete implements ICharacterRequestsToDelete {
    constructor(readonly payload: object & { sub: string }) {}

    getRequestToDelete(): { sub: string } {
        return { sub: this.payload.sub };
    }
}
