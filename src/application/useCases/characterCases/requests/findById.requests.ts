import type { ICharacterRequestsToFindById } from "../repository/character.requests.interfaces";
import { idIsValid_or_400 } from "../validators/validators";

export class CharacterRequestsToFindById
  implements ICharacterRequestsToFindById
{
  constructor(protected id?: string) {}

  getRequestToFindById(): { id: string } {
    idIsValid_or_400(this.id);

    return { id: this.id as string };
  }
}
