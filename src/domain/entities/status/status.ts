import type { IStatus, PropsStatus } from "./status.interface";

export class Status implements IStatus {
  private props: PropsStatus;

  constructor(data: PropsStatus) {
    this.props = data;
  }

  get getPoints(): number {
    return this.props.points;
  }
  set setPoints(pts: number) {
    this.props.points = pts;
  }
  get getExperience(): number {
    return this.props.experience;
  }
  set setExperience(exp: number) {
    this.props.experience = exp;
  }
  get getStrength(): number {
    return this.props.strength;
  }
  set setStrength(str: number) {
    this.props.strength = str;
  }
  get getIntelligence(): number {
    return this.props.intelligence;
  }
  set setIntelligence(int: number) {
    this.props.intelligence = int;
  }
  get getDexterity(): number {
    return this.props.dexterity;
  }
  set setDexterity(dex: number) {
    this.props.dexterity = dex;
  }
  get getVitality(): number {
    return this.props.vitality;
  }
  set setVitality(vit: number) {
    this.props.vitality = vit;
  }
  get getHealth(): number {
    return this.props.health;
  }
  set setHealth(hp: number) {
    this.props.health = hp;
  }
  get getEnergy(): number {
    return this.props.energy;
  }
  set setEnergy(mp: number) {
    this.props.energy = mp;
  }
  get getCurrentHealth(): number {
    return this.props.currentHealth;
  }
  set setCurrentHealth(c_hp: number) {
    this.props.currentHealth = c_hp;
  }
  get getCurrentEnergy(): number {
    return this.props.currentEnergy;
  }
  set setCurrentEnergy(c_en: number) {
    this.props.currentEnergy = c_en;
  }

  getDataToSave(): PropsStatus {
    return this.props;
  }
}
