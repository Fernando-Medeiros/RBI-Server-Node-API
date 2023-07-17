import type { IEquipmentRepository } from 'app/use-cases/equipment-cases/common/equipment.repository.interface';
import { EquipmentsModel as model } from 'infra/models/equipments.model';
import type {
    EquipmentDto,
    UpdateEquipmentDto,
} from 'app/use-cases/equipment-cases/common/equipment.dto';

export class EquipmentRepository implements IEquipmentRepository {
    async findById(id: string): Promise<EquipmentDto | null> {
        return await model.findOne({ pubId: id });
    }

    async findByIdAndDelete(id: string): Promise<EquipmentDto | null> {
        return await model.findOneAndRemove({ pubId: id });
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateEquipmentDto,
    ): Promise<EquipmentDto | null> {
        return await model.findOneAndUpdate({ pubId: id }, data);
    }

    async save(data: EquipmentDto): Promise<void> {
        await model.create(data);
    }
}
