import type { Equipment } from 'domain/entities/equipment.entity';

export type EquipmentProps = Equipment;

export type EquipmentUpdateProps = Partial<Omit<Equipment, '_id' | 'pubId'>>;
