import { v4 } from "uuid";
import { Equipment } from "domain/entities/equipment/equipment";
import equipmentDataMock from "./equipment.data.mock.json";

equipmentDataMock.pubId = v4();

export class EquipmentMock {
  constructor(private props = new Equipment(equipmentDataMock)) {}

  get pubId(): string {
    return equipmentDataMock.pubId;
  }

  get dataToCreate() {
    return this.props.getDataToSave();
  }
}
