import type { ICharacterRequestsToFindById } from "../repository/character.requests.interfaces";
import { CommonValidators } from "@app/validators/common.validators";

export class CharacterRequestsToFindById
  implements ICharacterRequestsToFindById
{
  constructor(protected id: string) {}

  getRequestToFindById(): { id: string } {
    CommonValidators.validateID(this.id);

    return { id: this.id };
  }
}
