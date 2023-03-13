import type { ICharacterRequestsToDelete } from "../repository/character.requests.interfaces";

export class CharacterRequestsToDelete implements ICharacterRequestsToDelete {
  constructor(protected sub?: string) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.sub as string };
  }
}
