import type { Equipment } from 'domain/entities/equipment.entity';

export type EquipmentDto = Equipment;

export type UpdateEquipmentDto = Partial<Omit<Equipment, '_id' | 'pubId'>>;
