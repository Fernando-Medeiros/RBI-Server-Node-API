import type { CharacterCreateProps } from "../repository/character.props";
import type { ICharacterRequestsToCreate } from "../repository/character.requests.interfaces";
import {
  charNameIsValid_or_400,
  classNameIsValid_or_400,
} from "../validators/validators";

export class CharacterRequestsToCreate implements ICharacterRequestsToCreate {
  constructor(
    protected charName?: string,
    protected className?: string,
    protected sub?: string
  ) {}

  getRequestToCreate(): [sub: string, toCreate: CharacterCreateProps] {
    charNameIsValid_or_400(this.charName);
    classNameIsValid_or_400(this.className);

    return [
      this.sub as string,
      {
        charName: this.charName as string,
        className: this.className as string,
      },
    ];
  }
}
