export type PropsCharacter = {
  level: number;
  charName: string;
  className: string;
  createdAt?: object;
};

export interface ICharacter {
  get getLevel(): number;
  set setLevel(level: number);
  get getName(): string;
  set setName(name: string);
  get getClass(): string;
  set setClass(className: string);
  get getCreatedAt(): object;
  getDataToSave(): PropsCharacter;
}
