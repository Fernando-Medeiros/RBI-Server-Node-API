import type { IInventoryRepository } from "../../repository/inventory.repository.interfaces";
import type {
  InventoryProps,
  InventoryUpdateProps,
} from "../../repository/inventory.props";

const inMemoryDatabase: InventoryProps[] = [];

export class InMemoryInventoryRepository implements IInventoryRepository {
  public database = inMemoryDatabase;

  async findById(id: string): Promise<InventoryProps | null> {
    return this.database.find((INV) => INV.pubId === id) || null;
  }

  async findByIdAndDelete(id: string): Promise<InventoryProps | null> {
    const Inventory = this.database.filter((INV) => INV.pubId === id)[0];

    if (Inventory) {
      this.database = this.database.filter(
        (INV) => INV.pubId != Inventory.pubId
      );
    }

    return Inventory || null;
  }

  async findByIdAndUpdate(
    id: string,
    data: InventoryUpdateProps
  ): Promise<InventoryProps | null> {
    const Inventory = this.database.filter((INV) => INV.pubId === id)[0];

    if (Inventory) {
      this.database = this.database.filter(
        (INV) => INV.pubId != Inventory.pubId
      );
      this.database.push(Object.assign({}, Inventory, data));
    }

    return Inventory || null;
  }

  async save(data: InventoryProps): Promise<void> {
    this.database.push(data);
  }
}
