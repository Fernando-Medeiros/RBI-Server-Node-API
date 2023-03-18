import type { StatusUpdateProps } from "../repository/status.props";
import type { IStatusRequestsToUpdate } from "../repository/status.requests.interfaces";
import { StatusValidators } from "../validators/validators";
import { BadRequest } from "@src/utils/http.exceptions";

export class StatusRequestsToUpdate implements IStatusRequestsToUpdate {
  constructor(
    protected sub: string,
    protected props: {
      points?: number;
      experience?: number;
      strength?: number;
      intelligence?: number;
      dexterity?: number;
      vitality?: number;
      health?: number;
      energy?: number;
      currentHealth?: number;
      currentEnergy?: number;
    }
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: StatusUpdateProps } {
    const data = {
      ...(this.props.points && { points: this.props.points }),
      ...(this.props.experience && { experience: this.props.experience }),
      ...(this.props.strength && { strength: this.props.strength }),
      ...(this.props.intelligence && { intelligence: this.props.intelligence }),
      ...(this.props.dexterity && { dexterity: this.props.dexterity }),
      ...(this.props.vitality && { vitality: this.props.vitality }),
      ...(this.props.health && { health: this.props.health }),
      ...(this.props.energy && { energy: this.props.energy }),
      ...(this.props.currentHealth && {
        currentHealth: this.props.currentHealth,
      }),
      ...(this.props.currentEnergy && {
        currentEnergy: this.props.currentEnergy,
      }),
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
