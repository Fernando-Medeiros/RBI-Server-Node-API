import type { Defensive, Offensive } from "domain/skills/skills.interface";

export interface ISkills {
  get getOffensiveSkills(): Offensive[] | object[];
  set setOffensive(skill: Offensive);

  get getDefensiveSkills(): Defensive[] | object[];
  set setDefensive(skill: Defensive);

  findOffensive(name: string): Offensive | undefined;
  findDefensive(name: string): Defensive | undefined;

  getDataToSave(): PropsSkills;
}

export type PropsSkills = {
  _id?: string;
  pubId: string;
  offensive: Offensive[];
  defensive: Defensive[];
};
