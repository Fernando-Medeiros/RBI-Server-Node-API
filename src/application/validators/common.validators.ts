import { validate } from "uuid";
import { BadRequest, Unauthorized } from "utils/http.exceptions";

export class CommonValidators {
  static validateID(id?: unknown): void {
    if (validate(String(id)) === false) {
      throw new BadRequest(
        "Could not verify credentials, please sign in again to refresh session!"
      );
    }
  }

  static validateToken(token?: unknown): void {
    if (String(token).length < 150) {
      new Unauthorized("Missing Authorization header with token");
    }
  }
}
