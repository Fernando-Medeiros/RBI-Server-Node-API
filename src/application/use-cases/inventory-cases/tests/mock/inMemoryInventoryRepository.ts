import type { Inventory } from "domain/entities/inventory/inventory.interface";
import type { IInventoryRepository } from "../../repository/inventory.repository.interfaces";

const inMemoryDatabase: Inventory[] = [];

export class InMemoryInventoryRepository implements IInventoryRepository {
  public database = inMemoryDatabase;

  async findById(id: string): Promise<Inventory | null> {
    return this.database.find((INV) => INV.pubId === id) || null;
  }

  async findByIdAndDelete(id: string): Promise<Inventory | null> {
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
    data: Partial<Inventory>
  ): Promise<Inventory | null> {
    const Inventory = this.database.filter((INV) => INV.pubId === id)[0];

    if (Inventory) {
      this.database = this.database.filter(
        (INV) => INV.pubId != Inventory.pubId
      );
      this.database.push(Object.assign({}, Inventory, data));
    }

    return Inventory || null;
  }

  async save(data: Inventory): Promise<void> {
    this.database.push(data);
  }
}
