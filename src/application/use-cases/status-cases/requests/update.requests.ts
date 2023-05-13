import type { StatusUpdateProps } from "../repository/status.props";
import type { IStatusRequestsToUpdate } from "../repository/status.requests.interfaces";
import { StatusValidators } from "../validators/validators";
import { BadRequest } from "utils/http.exceptions";

export class StatusRequestsToUpdate implements IStatusRequestsToUpdate {
  constructor(readonly payload: StatusUpdateProps & { sub: string }) {}

  getRequestToUpdate(): { sub: string; toUpdate: StatusUpdateProps } {
    const {
      sub,
      points,
      experience,
      strength,
      intelligence,
      dexterity,
      vitality,
      health,
      energy,
      currentHealth,
      currentEnergy,
    } = this.payload;

    const data = {
      ...(points && { points: points }),
      ...(experience && { experience: experience }),
      ...(strength && { strength: strength }),
      ...(intelligence && { intelligence: intelligence }),
      ...(dexterity && { dexterity: dexterity }),
      ...(vitality && { vitality: vitality }),
      ...(health && { health: health }),
      ...(energy && { energy: energy }),
      ...(currentHealth && { currentHealth: currentHealth }),
      ...(currentEnergy && { currentEnergy: currentEnergy }),
    };

    Object.values(data).filter((attr) =>
      StatusValidators.validateAttribute(attr)
    );

    if (!Object.values(data).length) {
      throw new BadRequest("No data to be updated!");
    }

    return { sub, toUpdate: data };
  }
}
