import type { ICharacterRepository } from 'app/use-cases/character-cases/common/character.repository.interface';
import { CharactersModel as model } from 'infra/models/characters.model';
import type {
    CharacterDto,
    CreateCharacterDto,
    UpdateCharacterDto,
} from 'app/use-cases/character-cases/common/character.dto';

export class CharacterRepository implements ICharacterRepository {
    async find(query: Partial<CharacterDto>): Promise<CharacterDto | null> {
        return await model.findOne({ ...query });
    }

    async findById(id: string): Promise<CharacterDto | null> {
        return await model.findOne({ pubId: id });
    }

    async findByName(name: string): Promise<CharacterDto | null> {
        return await model.findOne({ charName: name });
    }

    async findByIdAndDelete(id: string): Promise<CharacterDto | null> {
        return await model.findOneAndDelete({ pubId: id });
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateCharacterDto,
    ): Promise<CharacterDto | null> {
        return await model.findOneAndUpdate({ pubId: id }, data);
    }

    async save(data: CreateCharacterDto): Promise<void> {
        await model.create(data);
    }
}
