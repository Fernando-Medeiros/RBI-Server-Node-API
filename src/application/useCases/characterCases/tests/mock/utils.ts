import { InMemoryCharacterRepositoryMock } from "../mock/inMemoryCharacterRepository";

import characterDataMock from "../mock/character.data.mock.json";

const database = new InMemoryCharacterRepositoryMock();

export class UseCaseCharacterHelpers {
  public static insertOneCharacterToDatabase = async (): Promise<void> => {
    await database.save(characterDataMock);
  };

  public static removeOneCharacterToDatabase = async (): Promise<void> => {
    const { pubId: id } = characterDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getCharacterDataMock() {
    return characterDataMock;
  }
}
