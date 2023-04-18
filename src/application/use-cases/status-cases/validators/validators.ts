import { BadRequest } from "utils/http.exceptions";

export class StatusValidators {
  static validateAttribute = (attr?: unknown) => {
    if (typeof attr != "number" || attr <= 0) {
      throw new BadRequest(`Status ${attr} format must be a number!`);
    }
  };
}
