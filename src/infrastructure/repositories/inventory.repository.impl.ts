import type { IInventoryRepository } from "@app/use-cases/inventory-cases/repository/inventory.repository.interfaces";
import type {
  InventoryUpdateProps,
  InventoryProps,
} from "@app/use-cases/inventory-cases/repository/inventory.props";
import { InventoriesModel as model } from "@inf/models/inventories.model";

export class InventoryRepository implements IInventoryRepository {
  async findById(sub: string): Promise<InventoryProps | null> {
    return await model.findById({ pubId: sub });
  }

  async findByIdAndDelete(sub: string): Promise<InventoryProps | null> {
    return await model.findOneAndRemove({ pubId: sub });
  }

  async findByIdAndUpdate(
    sub: string,
    data: InventoryUpdateProps
  ): Promise<InventoryProps | null> {
    return await model.findOneAndUpdate({ pubId: sub }, data);
  }

  async save(data: InventoryProps): Promise<void> {
    await model.create(data);
  }
}
