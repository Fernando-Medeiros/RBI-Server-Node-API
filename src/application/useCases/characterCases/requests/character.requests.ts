import type { Request } from "express";
import type { ICharacterRequests } from "../repository/character.interface";
import type {
  PCharacterCreate,
  PCharacterUpdate,
} from "@app/useCases/characterCases/repository/character.interface";
import {
  charNameIsValid_or_400,
  classNameIsValid_or_400,
  levelIsValid_or_400,
  idIsValid_or_400,
} from "../validators/validators";

import { BadRequest } from "@root/src/utils/http.exceptions";

export class CharacterRequest implements ICharacterRequests {
  getRequestToCreate(req: Request): PCharacterCreate {
    const { charName, className } = req.body;

    charNameIsValid_or_400(charName);
    classNameIsValid_or_400(className);

    return {
      charName: charName,
      className: className,
    };
  }

  getRequestToUpdate(req: Request): PCharacterUpdate {
    const { charName, className, level } = req.body;

    charName ? charNameIsValid_or_400(charName) : null;
    className ? classNameIsValid_or_400(className) : null;
    level ? levelIsValid_or_400(level) : null;

    const toUpdate = {
      ...(level && { level: level }),
      ...(charName && { charName: charName }),
      ...(className && { className: className }),
    };

    if (!Object.values(toUpdate).length ? true : null) {
      throw new BadRequest("No data to be updated!");
    }
    return toUpdate;
  }

  getRequestToFindByName(req: Request): { name: string } {
    const { name } = req.params;

    charNameIsValid_or_400(name);

    return { name: name as string };
  }

  getRequestToFindById(req: Request): { id: string } {
    const { id } = req.params;

    idIsValid_or_400(id);

    return { id: id as string };
  }
}
