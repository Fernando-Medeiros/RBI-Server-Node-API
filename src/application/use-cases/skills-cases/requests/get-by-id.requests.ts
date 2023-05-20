import type { ISkillsRequestsToGetById } from '../repository/skills.requests.interfaces';
import { CommonValidators } from 'app/validators/common.validators';

export class SkillsRequestsToGetById implements ISkillsRequestsToGetById {
    constructor(readonly payload: { id: string }) {}

    getRequestToGetById(): { sub: string } {
        const { id: sub } = this.payload;

        CommonValidators.validateID(sub);

        return { sub };
    }
}
