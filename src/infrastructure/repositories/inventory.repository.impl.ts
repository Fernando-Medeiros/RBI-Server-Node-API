import type { IInventoryRepository } from 'app/use-cases/inventory-cases/common/inventory.repository.interface';
import { InventoriesModel as model } from 'infra/models/inventories.model';
import type {
    InventoryDto,
    UpdateInventoryDto,
} from 'app/use-cases/inventory-cases/common/inventory.dto';

export class InventoryRepository implements IInventoryRepository {
    async findById(id: string): Promise<InventoryDto | null> {
        return await model.findOne({ pubId: id });
    }

    async findByIdAndDelete(id: string): Promise<InventoryDto | null> {
        return await model.findOneAndRemove({ pubId: id });
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateInventoryDto,
    ): Promise<InventoryDto | null> {
        return await model.findOneAndUpdate({ pubId: id }, data);
    }

    async save(data: InventoryDto): Promise<void> {
        await model.create(data);
    }
}
