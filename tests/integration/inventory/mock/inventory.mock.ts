import type { InventoryProps } from "app/use-cases/inventory-cases/repository/inventory.props";
import inventoryDataMock from "example/inventory.data.mock.json";
import { v4 } from "uuid";

export class InventoryMock {
  private props: InventoryProps;

  constructor() {
    this.props = { ...inventoryDataMock, ...{ pubId: v4() } };
  }

  get pubId(): string {
    return this.props.pubId;
  }

  get dataToCreate(): InventoryProps {
    return this.props;
  }
}
