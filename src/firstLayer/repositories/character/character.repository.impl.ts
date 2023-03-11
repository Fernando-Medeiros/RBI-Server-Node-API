import type { ICharacterRepository } from "@app/useCases/characterCases/repository/character.interface";
import type {
  PropsCharacter,
  PCharacterCreate,
  PCharacterUpdate,
} from "@app/useCases/characterCases/repository/character.interface";

import { CharactersModel as model } from "@inf/models/characters.model";

export class CharacterRepository implements ICharacterRepository {
  async find(): Promise<PropsCharacter[]> {
    return await model.find();
  }
  async findById(id: string): Promise<PropsCharacter | null> {
    return await model.findOne({ pubId: id });
  }
  async findByName(name: string): Promise<PropsCharacter | null> {
    return await model.findOne({ charName: name });
  }
  async findByIdAndUpdate(id: string, data: PCharacterUpdate): Promise<PropsCharacter | null> {
    return await model.findOneAndUpdate({ pubId: id }, data);
  }
  async findByIdAndDelete(id: string): Promise<PropsCharacter | null> {
    return await model.findOneAndDelete({ pubId: id });
  }
  async save(data: PCharacterCreate): Promise<void> {
    await model.create(data);
  }
}
