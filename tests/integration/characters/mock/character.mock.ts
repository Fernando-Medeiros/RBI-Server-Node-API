import type { CharacterDto } from 'app/use-cases/character-cases/common/character.dto';
import characterDataMock from 'example/character.data.mock.json';
import { v4 } from 'uuid';

export class CharacterMock {
    protected props: CharacterDto;

    constructor(charName: string) {
        this.props = {
            ...characterDataMock,
            ...{ pubId: v4() },
            ...{ charName },
        };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get charName(): string {
        return this.props.charName;
    }

    get dataToCreate(): CharacterDto {
        return this.props;
    }
}
