export interface ICharacter {
  get getPubId(): string;
  set setPubId(id: string);
  get getLevel(): number;
  set setLevel(level: number);
  get getName(): string;
  set setName(name: string);
  get getClass(): string;
  set setClass(className: string);
  get getCreatedAt(): object;
  getDataToSave(): PCharacter;
}

export type PCharacter = {
  _id?: string;
  pubId: string;
  level: number;
  charName: string;
  className: string;
  createdAt?: object;
};
