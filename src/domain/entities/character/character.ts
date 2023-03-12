import type { ICharacter, PCharacter } from "./character.interface";

export class Character implements ICharacter {
  private props: PCharacter;

  constructor(data: PCharacter) {
    this.props = data;
  }
  get getPubId(): string {
    return this.props.pubId;
  }
  set setPubId(id: string) {
    this.props.pubId = id;
  }
  get getLevel(): number {
    return this.props.level;
  }
  set setLevel(level: number) {
    this.props.level = level;
  }
  get getName(): string {
    return this.props.charName;
  }
  set setName(name: string) {
    this.props.charName = name;
  }
  get getClass(): string {
    return this.props.className;
  }
  set setClass(className: string) {
    this.props.className = className;
  }
  get getCreatedAt(): object {
    return this.props.createdAt as object;
  }

  getDataToSave(): PCharacter {
    return this.props;
  }
}
