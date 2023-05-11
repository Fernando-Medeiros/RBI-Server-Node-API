import { BadRequest } from "utils/http.exceptions";

class RegexValidator {
  constructor(value: string | undefined, regex: RegExp, message: string) {
    const exp = value === null || !regex.test(value as string);

    if (exp) {
      throw new BadRequest(message);
    }
  }
}

export class CharacterValidators {
  static level = (level: number): number => {
    if (typeof level != "number" || level > 1000 || level <= 0) {
      throw new BadRequest("Level format is invalid!");
    }
    return level;
  };

  static charName = (name: string): string => {
    new RegexValidator(
      name,
      /^[a-zA-Z]{4,15}?$/g,
      "Character name format is invalid!"
    );
    return name;
  };

  static className = (name: string): string => {
    new RegexValidator(
      name,
      /^[a-zA-Z]{4,10}(\s[a-zA-Z]{4,10})?$/g,
      "Class name format is invalid!"
    );
    return name;
  };
}
