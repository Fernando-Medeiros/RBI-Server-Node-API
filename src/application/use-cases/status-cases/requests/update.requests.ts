import type { StatusUpdateProps } from "../repository/status.props";
import type { IStatusRequestsToUpdate } from "../repository/status.requests.interfaces";
import { StatusValidators } from "../validators/validators";
import { BadRequest } from "@src/utils/http.exceptions";

export class StatusRequestsToUpdate implements IStatusRequestsToUpdate {
  constructor(
    protected sub: string,
    protected points?: number,
    protected experience?: number,
    protected strength?: number,
    protected intelligence?: number,
    protected dexterity?: number,
    protected vitality?: number,
    protected health?: number,
    protected energy?: number,
    protected currentHealth?: number,
    protected currentEnergy?: number
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: StatusUpdateProps } {
    const data = {
      ...(this.points && { points: this.points }),
      ...(this.experience && { experience: this.experience }),
      ...(this.strength && { strength: this.strength }),
      ...(this.intelligence && { intelligence: this.intelligence }),
      ...(this.dexterity && { dexterity: this.dexterity }),
      ...(this.vitality && { vitality: this.vitality }),
      ...(this.health && { health: this.health }),
      ...(this.energy && { energy: this.energy }),
      ...(this.currentHealth && { currentHealth: this.currentHealth }),
      ...(this.currentEnergy && { currentEnergy: this.currentEnergy }),
    };

    Object.values(data).filter((attr) =>
      StatusValidators.validateAttribute(attr)
    );

    if (!Object.values(data).length ? true : null) {
      throw new BadRequest("No data to be updated!");
    }

    return { sub: this.sub, toUpdate: data };
  }
}
