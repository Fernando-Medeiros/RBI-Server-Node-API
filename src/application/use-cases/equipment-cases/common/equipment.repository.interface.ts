import type { IRepository } from 'core/repository.interface';
import type { EquipmentDto, UpdateEquipmentDto } from './equipment.dto';

export type IEquipmentRepository = IRepository<
    EquipmentDto,
    UpdateEquipmentDto
>;
