import type { ICharacterRepository } from "@app/use-cases/character-cases/repository/character.repository.interfaces";
import type {
  CharacterCreateProps,
  CharacterUpdateProps,
  CharacterProps,
} from "@app/use-cases/character-cases/repository/character.props";

const inMemoryDatabase: CharacterProps[] = [];

export class InMemoryCharacterRepository implements ICharacterRepository {
  public database = inMemoryDatabase;

  async find(): Promise<CharacterProps[]> {
    return this.database;
  }

  async findById(id: string): Promise<CharacterProps | null> {
    return this.database.find((C) => C.pubId === id) || null;
  }

  async findByName(name: string): Promise<CharacterProps | null> {
    return this.database.find((C) => C.charName === name) || null;
  }

  async findByIdAndUpdate(
    id: string,
    data: CharacterUpdateProps
  ): Promise<CharacterProps | null> {
    const character = this.database.filter((C) => C.pubId === id)[0];

    if (character) {
      this.database = this.database.filter((C) => C.pubId != character.pubId);
      this.database.push(Object.assign({}, character, data));
    }

    return character || null;
  }

  async findByIdAndDelete(id: string): Promise<CharacterProps | null> {
    const character = this.database.filter((C) => C.pubId === id)[0];

    if (character) {
      this.database = this.database.filter((C) => C.pubId != character.pubId);
    }

    return character || null;
  }

  async save(data: CharacterCreateProps): Promise<void> {
    const { pubId, charName, className } = data;

    const newCharacter = {
      level: 1,
      pubId: pubId as string,
      charName: charName,
      className: className,
    };

    this.database.push(newCharacter);
  }
}
