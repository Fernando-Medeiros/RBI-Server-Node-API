export interface IStatus {
  get getPoints(): number;
  set setPoints(pts: number);
  get getExperience(): number;
  set setExperience(exp: number);
  get getStrength(): number;
  set setStrength(str: number);
  get getIntelligence(): number;
  set setIntelligence(int: number);
  get getDexterity(): number;
  set setDexterity(dex: number);
  get getVitality(): number;
  set setVitality(vit: number);
  get getHealth(): number;
  set setHealth(hp: number);
  get getEnergy(): number;
  set setEnergy(mp: number);
  get getCurrentHealth(): number;
  set setCurrentHealth(c_hp: number);
  get getCurrentEnergy(): number;
  set setCurrentEnergy(c_en: number);
  getDataToSave(): PropsStatus;
}

export type PropsStatus = {
  _id?: string;
  pubId: string;
  points: number;
  experience: number;
  strength: number;
  intelligence: number;
  dexterity: number;
  vitality: number;
  health: number;
  energy: number;
  currentHealth: number;
  currentEnergy: number;
};
