import type { Inventory } from "domain/entities/inventory.entity";

export interface IInventoryRepository {
  findById(id: string): Promise<Inventory | null>;
  findByIdAndDelete(id: string): Promise<Inventory | null>;
  findByIdAndUpdate(
    id: string,
    data: Partial<Inventory>
  ): Promise<Inventory | null>;
  save(data: Inventory): Promise<void>;
}
