import type { EquipmentUpdateProps } from "../repository/equipment.props";
import type { IEquipmentRequestsToUpdate } from "../repository/equipment.requests.interfaces";
import { EquipmentValidators as v } from "../validators/validators";
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
      accessoryLeft,
      accessoryRight,
    } = this.props;

    const data = { pubId: this.sub };

    const equipments = {
      head: v.validateArmor(head),
      body: v.validateArmor(body),
      leg: v.validateArmor(leg),
      handLeft: v.validateWeapon(handLeft),
      handRight: v.validateWeapon(handRight),
      accessoryLeft: v.validateAccessory(accessoryLeft),
      accessoryRight: v.validateAccessory(accessoryRight),
    };

    if (Object.values(equipments).filter((V) => V != undefined).length === 0) {
      throw new BadRequest("No data to be updated!");
    }

    Object.assign(data, equipments);

    return { sub: this.sub, toUpdate: data };
  }
}
