import type { ICharacterRequestsToFindByName } from "../repository/character.requests.interfaces";
import { charNameIsValid_or_400 } from "../validators/validators";

export class CharacterRequestsToFindByName
  implements ICharacterRequestsToFindByName
{
  constructor(protected name?: string) {}

  getRequestToFindByName(): { name: string } {
    charNameIsValid_or_400(this.name);

    return { name: this.name as string };
  }
}
