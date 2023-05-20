import type { IInventoryRepository } from 'app/use-cases/inventory-cases/repository/inventory.repository.interfaces';
import type { Inventory } from 'domain/entities/inventory.entity';
import { InventoriesModel } from 'infra/models/inventories.model';

export class InventoryRepository implements IInventoryRepository {
    async findById(sub: string): Promise<Inventory | null> {
        return await InventoriesModel.findOne({ pubId: sub });
    }

    async findByIdAndDelete(sub: string): Promise<Inventory | null> {
        return await InventoriesModel.findOneAndRemove({ pubId: sub });
    }

    async findByIdAndUpdate(
        sub: string,
        data: Partial<Inventory>,
    ): Promise<Inventory | null> {
        return await InventoriesModel.findOneAndUpdate({ pubId: sub }, data);
    }

    async save(data: Inventory): Promise<void> {
        await InventoriesModel.create(data);
    }
}
