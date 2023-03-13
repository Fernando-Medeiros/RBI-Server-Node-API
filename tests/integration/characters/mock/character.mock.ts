import { v4 } from "uuid";

import { Character } from "@root/src/domain/entities/character/character";

const dataDefault = {
  level: 1,
  pubId: v4(),
  charName: "ExampleName",
  className: "Rogue",
};

export class CharacterMock {
  private props: Character;

  constructor(charName: string) {
    this.props = new Character(dataDefault);

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
