import { BadRequest } from "@src/utils/http.exceptions";
import { validate } from "uuid";

class RegexValidator {
  constructor(value: string | undefined, regex: RegExp, message: string) {
    const exp = value === null || !regex.test(value as string);

    if (exp) {
      throw new BadRequest(message);
    }
  }
}

export const levelIsValid_or_400 = (level?: number): void => {
  if (typeof level != "number" || level > 1000 || level <= 0) {
    throw new BadRequest("Level format is invalid!");
  }
};

export const charNameIsValid_or_400 = (name?: string): void => {
  new RegexValidator(
    name,
    /^[a-zA-Z]{4,15}?$/g,
    "Character name format is invalid!"
  );
};

export const classNameIsValid_or_400 = (name?: string): void => {
  new RegexValidator(
    name,
    /^[a-zA-Z]{4,10}(\s[a-zA-Z]{4,10})?$/g,
    "Class name format is invalid!"
  );
};

export const idIsValid_or_400 = (id?: string): void => {
  if (id === undefined || !validate(id)) {
    throw new BadRequest("ID format is invalid!");
  }
};
