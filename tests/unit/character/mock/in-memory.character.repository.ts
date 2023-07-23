import type {
    CharacterDto,
    CreateCharacterDto,
    UpdateCharacterDto,
} from 'app/use-cases/character-cases/common/character.dto';
import { MemoryRepository } from 'tests/unit/in-memory-repository';
import characterDataMock from 'example/character.data.mock.json';

export class InMemoryCharacterRepository extends MemoryRepository<
    CharacterDto,
    UpdateCharacterDto,
    CreateCharacterDto
> {
    override async save(data: CreateCharacterDto): Promise<void> {
        super.save({
            level: 1,
            gender: 'man',
            ...data,
        });
    }

    getDataMock = (): CharacterDto => Object.assign({}, characterDataMock);
}
