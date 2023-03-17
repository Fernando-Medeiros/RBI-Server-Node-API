import type { ICharacterRequestsToGetByName } from "../repository/character.requests.interfaces";
import { CharacterValidators } from "../validators/validators";

export class CharacterRequestsToGetByName
  implements ICharacterRequestsToGetByName
{
  constructor(protected name?: string) {}

  getRequestToGetByName(): { name: string } {
    CharacterValidators.validateCharName(this.name);

    return { name: this.name as string };
  }
}
