import type { IRequestToUpdate } from 'core/requests.interface';
import type { UpdateEquipmentDto } from 'app/use-cases/equipment-cases/common/equipment.dto';
import { EquipmentValidators as validate } from 'app/use-cases/equipment-cases/validators/validators';
import { BaseRequests } from './base.requests';
import { BadRequest } from 'utils/http.exceptions';

export class EquipmentRequests
    extends BaseRequests
    implements IRequestToUpdate<UpdateEquipmentDto>
{
    constructor(
        protected override payload: UpdateEquipmentDto & { id: string },
    ) {
        super(payload);
    }

    getRequestToUpdate(): { id: string; data: UpdateEquipmentDto } {
        const {
            id,
            head,
            body,
            leg,
            handLeft,
            handRight,
            accessoryLeft: accLeft,
            accessoryRight: accRight,
        } = this.payload;

        const data = new Object();

        Object.assign(data, {
            ...(head && { head: validate.armor(head) }),
            ...(body && { body: validate.armor(body) }),
            ...(leg && { leg: validate.armor(leg) }),
            ...(handLeft && { handLeft: validate.weapon(handLeft) }),
            ...(handRight && { handRight: validate.weapon(handRight) }),
            ...(accLeft && { accessoryLeft: validate.accessory(accLeft) }),
            ...(accRight && { accessoryRight: validate.accessory(accRight) }),
        });

        dataIsEmpty(data);

        return { id, data };
    }
}

function dataIsEmpty(data: object) {
    if (!Object.values(data).length) {
        throw new BadRequest('No data to be updated!');
    }
}
