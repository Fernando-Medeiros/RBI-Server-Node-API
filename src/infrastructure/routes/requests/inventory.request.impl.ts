import type { IRequestToUpdate } from 'core/requests.interface';
import type { UpdateInventoryDto } from 'app/use-cases/inventory-cases/common/inventory.dto';
import { InventoryValidators as validate } from 'app/use-cases/inventory-cases/validators/validators';
import { BadRequest } from 'utils/http.exceptions';
import { BaseRequests } from './base.requests';

export class InventoryRequests
    extends BaseRequests
    implements IRequestToUpdate<UpdateInventoryDto>
{
    constructor(
        protected override payload: UpdateInventoryDto & { id: string },
    ) {
        super(payload);
    }

    getRequestToUpdate(): {
        id: string;
        data: UpdateInventoryDto;
    } {
        const { id, armors, accessories, consumables, materials, weapons } =
            this.payload;

        const data = new Object();

        Object.assign(data, {
            ...(armors && { armors: validate.armor(armors) }),
            ...(accessories && {
                accessories: validate.accessory(accessories),
            }),
            ...(consumables && {
                consumables: validate.consumable(consumables),
            }),
            ...(materials && { materials: validate.material(materials) }),
            ...(weapons && { weapons: validate.weapon(weapons) }),
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
