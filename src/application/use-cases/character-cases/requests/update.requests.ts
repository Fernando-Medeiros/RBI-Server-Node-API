import type { CharacterUpdateProps } from "../repository/character.props";
import type { ICharacterRequestsToUpdate } from "../repository/character.requests.interfaces";
import { CharacterValidators } from "../validators/validators";

import { BadRequest } from "@src/utils/http.exceptions";

export class CharacterRequestsToUpdate implements ICharacterRequestsToUpdate {
  constructor(
    protected sub: string,
    protected charName?: string,
    protected className?: string,
    protected level?: number
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: CharacterUpdateProps } {
    this.charName ? CharacterValidators.validateCharName(this.charName) : null;
    this.className
      ? CharacterValidators.validateClassName(this.className)
      : null;
    this.level ? CharacterValidators.validateLevel(this.level) : null;

    const data = {
      ...(this.level && { level: this.level }),
      ...(this.charName && { charName: this.charName }),
      ...(this.className && { className: this.className }),
    };

    if (!Object.values(data).length ? true : null) {
      throw new BadRequest("No data to be updated!");
    }
    return { sub: this.sub, toUpdate: data };
  }
}
