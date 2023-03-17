import type { CharacterCreateProps } from "../repository/character.props";
import type { ICharacterRequestsToCreate } from "../repository/character.requests.interfaces";
import { CharacterValidators } from "../validators/validators";

export class CharacterRequestsToCreate implements ICharacterRequestsToCreate {
  constructor(
    protected sub: string,
    protected charName?: string,
    protected className?: string
  ) {}

  getRequestToCreate(): { sub: string; toCreate: CharacterCreateProps } {
    CharacterValidators.validateCharName(this.charName);
    CharacterValidators.validateClassName(this.className);

    return {
      sub: this.sub,
      toCreate: {
        charName: this.charName as string,
        className: this.className as string,
      },
    };
  }
}
