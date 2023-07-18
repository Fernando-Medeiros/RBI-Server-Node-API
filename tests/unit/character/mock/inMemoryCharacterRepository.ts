import type { ICharacterRepository } from 'app/use-cases/character-cases/common/character.repository.interface';
import type {
    CharacterDto,
    CreateCharacterDto,
    UpdateCharacterDto,
} from 'app/use-cases/character-cases/common/character.dto';
import characterDataMock from 'example/character.data.mock.json';

export class InMemoryCharacterRepository implements ICharacterRepository {
    public database: CharacterDto[] = [];
    public helpers: InMemoryHelpers;

    constructor() {
        this.helpers = new InMemoryHelpers(this);
    }

    async find(query: Partial<CharacterDto>): Promise<CharacterDto | null> {
        return (
            this.database.find(C =>
                Object.values(C)
                    .toString()
                    .includes(Object.values(query).toString()),
            ) || null
        );
    }

    async findById(id: string): Promise<CharacterDto | null> {
        return this.database.find(C => C.pubId === id) || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateCharacterDto,
    ): Promise<CharacterDto | null> {
        const character = this.database.filter(C => C.pubId === id)[0];

        if (character) {
            this.database = this.database.filter(
                C => C.pubId != character.pubId,
            );
            this.database.push(Object.assign({}, character, data));
        }
        return character || null;
    }

    async findByIdAndDelete(id: string): Promise<CharacterDto | null> {
        const character = this.database.filter(C => C.pubId === id)[0];

        if (character) {
            this.database = this.database.filter(
                C => C.pubId != character.pubId,
            );
        }
        return character || null;
    }

    async save(data: CreateCharacterDto): Promise<void> {
        const { pubId, charName, className } = data;

        const newCharacter = {
            level: 1,
            pubId: pubId as string,
            charName: charName,
            className: className,
            gender: 'man',
        };

        this.database.push(newCharacter);
    }
}

class InMemoryHelpers {
    constructor(private database: ICharacterRepository) {}

    insertOneCharacterToDatabase = async (): Promise<void> => {
        await this.database.save(this.getDataMock());
    };

    removeOneCharacterToDatabase = async (): Promise<void> => {
        await this.database.findByIdAndDelete(this.pubId().id);
    };

    pubId = (): { id: string } => Object({ id: characterDataMock.pubId });

    getDataMock = () => characterDataMock;
}
