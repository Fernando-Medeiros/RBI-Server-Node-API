import type { CharacterUpdateProps } from "../repository/character.props";
import type { ICharacterRequestsToUpdate } from "../repository/character.requests.interfaces";
import {
  charNameIsValid_or_400,
  classNameIsValid_or_400,
  levelIsValid_or_400,
} from "../validators/validators";

import { BadRequest } from "@src/utils/http.exceptions";

export class CharacterRequestsToUpdate implements ICharacterRequestsToUpdate {
  constructor(
    protected charName?: string,
    protected className?: string,
    protected level?: number,
    protected sub?: string
  ) {}

  getRequestToUpdate(): [sub: string, toUpdate: CharacterUpdateProps] {
    this.charName ? charNameIsValid_or_400(this.charName) : null;
    this.className ? classNameIsValid_or_400(this.className) : null;
    this.level ? levelIsValid_or_400(this.level) : null;

    const toUpdate = {
      ...(this.level && { level: this.level }),
      ...(this.charName && { charName: this.charName }),
      ...(this.className && { className: this.className }),
    };

    if (!Object.values(toUpdate).length ? true : null) {
      throw new BadRequest("No data to be updated!");
    }
    return [this.sub as string, toUpdate];
  }
}
