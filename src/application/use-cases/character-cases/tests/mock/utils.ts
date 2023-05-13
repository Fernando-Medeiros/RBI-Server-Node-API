import type { ICharacterRepository } from "../../repository/character.repository.interfaces";
import characterDataMock from "example/character.data.mock.json";

export class UseCaseCharacterHelpers {
  constructor(private database: ICharacterRepository) {}

  insertOneCharacterToDatabase = async (): Promise<void> => {
    await this.database.save(characterDataMock);
  };

  removeOneCharacterToDatabase = async (): Promise<void> => {
    const { pubId: id } = characterDataMock;

    await this.database.findByIdAndDelete(id);
  };

  getCharacterDataMock() {
    return characterDataMock;
  }

  pubId(): string {
    return characterDataMock.pubId;
  }
}
