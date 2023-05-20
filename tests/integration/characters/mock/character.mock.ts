import type { CharacterProps } from 'app/use-cases/character-cases/repository/character.props';
import characterDataMock from 'example/character.data.mock.json';
import { v4 } from 'uuid';

export class CharacterMock {
    protected props: CharacterProps;

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

    get dataToCreate(): CharacterProps {
        return this.props;
    }
}
