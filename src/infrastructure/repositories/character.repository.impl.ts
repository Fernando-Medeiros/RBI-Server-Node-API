import type { ICharacterRepository } from "app/use-cases/character-cases/repository/character.repository.interfaces";
import type {
  CharacterProps,
  CharacterCreateProps,
  CharacterUpdateProps,
} from "app/use-cases/character-cases/repository/character.props";
import { CharactersModel as model } from "infra/models/characters.model";

export class CharacterRepository implements ICharacterRepository {
  async find(): Promise<CharacterProps[]> {
    return await model.find();
  }

  async findById(id: string): Promise<CharacterProps | null> {
    return await model.findOne({ pubId: id });
  }

  async findByName(name: string): Promise<CharacterProps | null> {
    return await model.findOne({ charName: name });
  }

  async findByIdAndDelete(id: string): Promise<CharacterProps | null> {
    return await model.findOneAndDelete({ pubId: id });
  }

  async findByIdAndUpdate(
    id: string,
    data: CharacterUpdateProps
  ): Promise<CharacterProps | null> {
    return await model.findOneAndUpdate({ pubId: id }, data);
  }

  async save(data: CharacterCreateProps): Promise<void> {
    await model.create(data);
  }
}
