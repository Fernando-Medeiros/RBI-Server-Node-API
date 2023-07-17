import type { Inventory } from 'domain/entities/inventory.entity';

export type InventoryDto = Inventory;

export type UpdateInventoryDto = Partial<Omit<Inventory, '_id' | 'pubId'>>;
