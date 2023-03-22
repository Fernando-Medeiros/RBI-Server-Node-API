import { v4 } from "uuid";
import { Inventory } from "@dom/entities/inventory/inventory";
import inventoryDataMock from "./inventory.data.mock.json";

inventoryDataMock.pubId = v4();

export class InventoryMock {
  constructor(private props = new Inventory(inventoryDataMock)) {}

  get pubId(): string {
    return inventoryDataMock.pubId;
  }

  get dataToCreate() {
    return this.props.getDataToSave();
  }
}
