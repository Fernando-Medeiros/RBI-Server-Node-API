import type { ICharacterRequestsToGetById } from "../repository/character.requests.interfaces";
import { CommonValidators } from "@app/validators/common.validators";

export class CharacterRequestsToGetById implements ICharacterRequestsToGetById {
  constructor(protected id: string) {}

  getRequestToGetById(): { id: string } {
    CommonValidators.validateID(this.id);

    return { id: this.id };
  }
}
