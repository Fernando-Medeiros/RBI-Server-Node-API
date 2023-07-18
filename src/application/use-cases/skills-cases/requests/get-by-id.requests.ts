import { CommonValidators } from 'utils/common.validators';
import type { ISkillsRequestsToGetById } from '../repository/skills.requests.interfaces';

export class SkillsRequestsToGetById implements ISkillsRequestsToGetById {
    constructor(readonly payload: { id: string }) {}

    getRequestToGetById(): { sub: string } {
        const { id: sub } = this.payload;

        CommonValidators.validateUUID(sub);

        return { sub };
    }
}
