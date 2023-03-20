import type { EquipmentUpdateProps } from "../repository/equipment.props";
import type { IEquipmentRequestsToUpdate } from "../repository/equipment.requests.interfaces";
import { EquipmentValidators as validate } from "../validators/validators";
import { BadRequest } from "@src/utils/http.exceptions";

export class EquipmentRequestsToUpdate implements IEquipmentRequestsToUpdate {
  constructor(
    protected sub: string,
    protected props: {
      head?: object;
      body?: object;
      leg?: object;
      handLeft?: object;
      handRight?: object;
      accessoryLeft?: object;
      accessoryRight?: object;
    }
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: EquipmentUpdateProps } {
    const {
      head,
      body,
      leg,
      handLeft,
      handRight,
      accessoryLeft: accLeft,
      accessoryRight: accRight,
    } = this.props;

    const equipments = {
      ...(head && { head: validate.armor(head) }),
      ...(body && { body: validate.armor(body) }),
      ...(leg && { leg: validate.armor(leg) }),
      ...(handLeft && { handLeft: validate.weapon(handLeft) }),
      ...(handRight && { handRight: validate.weapon(handRight) }),
      ...(accLeft && { accessoryLeft: validate.accessory(accLeft) }),
      ...(accRight && { accessoryRight: validate.accessory(accRight) }),
    };

    if (Object.values(equipments).filter((V) => V != undefined).length === 0) {
      throw new BadRequest("No data to be updated!");
    }

    return { sub: this.sub, toUpdate: equipments };
  }
}
