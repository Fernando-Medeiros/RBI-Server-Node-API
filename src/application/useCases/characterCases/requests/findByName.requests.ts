import type { ICharacterRequestsToFindByName } from "../repository/character.requests.interfaces";
import { CharacterValidators } from "../validators/validators";

export class CharacterRequestsToFindByName
  implements ICharacterRequestsToFindByName
{
  constructor(protected name?: string) {}

  getRequestToFindByName(): { name: string } {
    CharacterValidators.validateCharName(this.name);

    return { name: this.name as string };
  }
}
