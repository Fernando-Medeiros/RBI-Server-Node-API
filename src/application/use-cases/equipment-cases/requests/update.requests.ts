import type { EquipmentUpdateProps } from '../repository/equipment.props';
import type { IEquipmentRequestsToUpdate } from '../repository/equipment.requests.interfaces';
import { EquipmentValidators as validate } from '../validators/validators';
import { BadRequest } from 'utils/http.exceptions';

export class EquipmentRequestsToUpdate implements IEquipmentRequestsToUpdate {
    constructor(readonly payload: EquipmentUpdateProps & { sub: string }) {}

    getRequestToUpdate(): { sub: string; toUpdate: EquipmentUpdateProps } {
        const {
            sub,
            head,
            body,
            leg,
            handLeft,
            handRight,
            accessoryLeft: accLeft,
            accessoryRight: accRight,
        } = this.payload;

        const toUpdate = {
            ...(head && { head: validate.armor(head) }),
            ...(body && { body: validate.armor(body) }),
            ...(leg && { leg: validate.armor(leg) }),
            ...(handLeft && { handLeft: validate.weapon(handLeft) }),
            ...(handRight && { handRight: validate.weapon(handRight) }),
            ...(accLeft && { accessoryLeft: validate.accessory(accLeft) }),
            ...(accRight && { accessoryRight: validate.accessory(accRight) }),
        };

        if (!Object.values(toUpdate).length) {
            throw new BadRequest('No data to be updated!');
        }

        return { sub, toUpdate };
    }
}
