import { v4 } from "uuid";

import { Character } from "domain/entities/character/character";

import characterDataMock from "./character.data.mock.json";

characterDataMock.pubId = v4();

export class CharacterMock {
  private props: Character;

  constructor(charName: string) {
    this.props = new Character(characterDataMock);

    this.props.setName = charName;
  }

  get pubId(): string {
    return this.props.getPubId;
  }

  get charName(): string {
    return this.props.getName;
  }

  get dataToCreate() {
    return this.props.getDataToSave();
  }
}
