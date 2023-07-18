import type { IRequestToUpdate } from 'core/requests.interface';
import type { UpdateSkillsDto } from 'app/use-cases/skills-cases/common/skills.dto';
import { SkillsValidators as validate } from 'app/use-cases/skills-cases/validators/validators';
import { BaseRequests } from './base.requests';
import { BadRequest } from 'utils/http.exceptions';

export class SkillsRequests
    extends BaseRequests
    implements IRequestToUpdate<UpdateSkillsDto>
{
    constructor(protected override payload: UpdateSkillsDto & { id: string }) {
        super(payload);
    }

    getRequestToUpdate() {
        const { id, offensive, defensive } = this.payload;

        const data = new Object();

        Object.assign(data, {
            ...(offensive && { offensive: validate.offensive(offensive) }),
            ...(defensive && { defensive: validate.defensive(defensive) }),
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
