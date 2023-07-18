import type { IRepository } from 'core/repository.interface';
import type { InventoryDto, UpdateInventoryDto } from './inventory.dto';

export type IInventoryRepository = IRepository<
    InventoryDto,
    UpdateInventoryDto
>;
