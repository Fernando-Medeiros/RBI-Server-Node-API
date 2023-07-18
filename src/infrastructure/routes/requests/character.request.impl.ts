import type { IRequestToUpdate } from 'core/requests.interface';
import type {
    CreateCharacterDto,
    UpdateCharacterDto,
} from 'app/use-cases/character-cases/common/character.dto';
import { CharacterValidators as validators } from 'app/use-cases/character-cases/validators/validators';
import { BaseRequests } from './base.requests';
import { BadRequest } from 'utils/http.exceptions';

export class CharacterRequests
    extends BaseRequests
    implements IRequestToUpdate<UpdateCharacterDto>
{
    constructor(
        protected override payload: UpdateCharacterDto & { id: string },
    ) {
        super(payload);
    }

    override getRequestToCreate(): {
        id: string;
        data: CreateCharacterDto;
    } {
        const { id } = super.getRequestToCreate();

        const { charName, className } = this.payload;

        const data = Object();

        Object.assign(data, {
            pubId: id,
            charName: validators.charName(charName || ''),
            className: validators.className(className || ''),
        });

        return { id, data };
    }

    getRequestToUpdate(): {
        id: string;
        data: UpdateCharacterDto;
    } {
        const { id, level, charName, className, gender } = this.payload;

        const data = Object();

        Object.assign(data, {
            ...(level && { level: validators.level(level) }),
            ...(charName && { charName: validators.charName(charName) }),
            ...(className && { className: validators.className(className) }),
            ...(gender && { gender: gender }),
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
