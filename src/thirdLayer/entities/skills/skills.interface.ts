import type { Defensive, Offensive } from "@dom/skills/skills.interface";

export interface ISkills {
  get getOffensiveSkills(): Offensive[];
  set setOffensive(skill: Offensive);

  get getDefensiveSkills(): Defensive[];
  set setDefensive(skill: Defensive);

  findOffensive(name: string): Offensive | undefined;
  findDefensive(name: string): Defensive | undefined;

  getDataToSave(): PropsSkills;
}

export type PropsSkills = {
  offensive: Offensive[];
  defensive: Defensive[];
};
