import type {
  ICharacter,
  PropsCharacter,
} from "../interfaces/character.interface";

export class Character implements ICharacter {
  private props: PropsCharacter;

  constructor(dataToCreate: PropsCharacter) {
    this.props = dataToCreate;
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
  getDataToSave(): PropsCharacter {
    return Object.assign({}, this.props);
  }
}
