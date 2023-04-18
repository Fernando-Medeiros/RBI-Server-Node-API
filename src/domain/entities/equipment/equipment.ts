import type { IEquipment, PropsEquipment } from "./equipment.interface";

import type { Armor, Weapon, Accessory } from "domain/items/items.interface";

export class Equipment implements IEquipment {
  private props: PropsEquipment;

  constructor(data: PropsEquipment) {
    this.props = data;
  }

  get getHead(): Armor | object {
    return this.props.head;
  }
  set setHead(item: Armor) {
    this.props.head = item;
  }
  get getBody(): Armor | object {
    return this.props.body;
  }
  set setBody(item: Armor) {
    this.props.body = item;
  }
  get getLeg(): Armor | object {
    return this.props.leg;
  }
  set setLeg(item: Armor) {
    this.props.leg = item;
  }
  get getHandLeft(): Weapon | object {
    return this.props.handLeft;
  }
  set setHandLeft(item: Weapon) {
    this.props.handLeft = item;
  }
  get getHandRight(): Weapon | object {
    return this.props.handRight;
  }
  set setHandRight(item: Weapon) {
    this.props.handRight = item;
  }
  get getAccessoryLeft(): Accessory | object {
    return this.props.accessoryLeft;
  }
  set setAccessoryLeft(item: Accessory) {
    this.props.accessoryLeft = item;
  }
  get getAccessoryRight(): Accessory | object {
    return this.props.accessoryRight;
  }
  set setAccessoryRight(item: Accessory) {
    this.props.accessoryRight = item;
  }

  getDataToSave(): PropsEquipment {
    return this.props;
  }
}
