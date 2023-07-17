import type { IRequestToUpdate } from 'core/requests.interface';
import type { UpdateStatusDto } from 'app/use-cases/status-cases/common/status.dto';
import { BadRequest } from 'utils/http.exceptions';
import { BaseRequests } from './base.requests';
import { CommonValidators } from 'utils/common.validators';

export class StatusRequests
    extends BaseRequests
    implements IRequestToUpdate<UpdateStatusDto>
{
    constructor(protected override payload: UpdateStatusDto & { id: string }) {
        super(payload);
    }

    getRequestToUpdate() {
        const { id } = this.payload;
        const {
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
        } = this.payload || {};

        const data = new Object();

        Object.assign(data, {
            ...(points && { points }),
            ...(experience && { experience }),
            ...(strength && { strength }),
            ...(intelligence && { intelligence }),
            ...(dexterity && { dexterity }),
            ...(vitality && { vitality }),
            ...(health && { health }),
            ...(energy && { energy }),
            ...(currentHealth && { currentHealth }),
            ...(currentEnergy && { currentEnergy }),
        });

        CommonValidators.validateUUID(id);

        dataIsEmpty(data);

        attrIsNumber(data);

        return { id, data };
    }
}

function attrIsNumber(data: object) {
    Object.values(data).filter(attr => {
        if (typeof attr != 'number' || attr <= 0) {
            throw new BadRequest(`Status ${attr} format must be a number!`);
        }
    });
}

function dataIsEmpty(data: object) {
    if (!Object.values(data).length) {
        throw new BadRequest('No data to be updated!');
    }
}
