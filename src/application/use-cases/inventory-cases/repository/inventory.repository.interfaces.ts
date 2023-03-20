import type { InventoryProps, InventoryUpdateProps } from "./inventory.props";

export interface IInventoryRepository {
  findById(id: string): Promise<InventoryProps | null>;
  findByIdAndDelete(id: string): Promise<InventoryProps | null>;
  findByIdAndUpdate(id: string, data: InventoryUpdateProps): Promise<InventoryProps | null>;
  save(data: InventoryProps): Promise<void>;
}
