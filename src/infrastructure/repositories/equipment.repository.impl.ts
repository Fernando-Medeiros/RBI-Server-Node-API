import type { IEquipmentRepository } from 'app/use-cases/equipment-cases/repository/equipment.repository.interfaces';
import type {
    EquipmentUpdateProps,
    EquipmentProps,
} from 'app/use-cases/equipment-cases/repository/equipment.props';
import { EquipmentsModel as model } from 'infra/models/equipments.model';

export class EquipmentRepository implements IEquipmentRepository {
    async findById(sub: string): Promise<EquipmentProps | null> {
        return await model.findOne({ pubId: sub });
    }

    async findByIdAndDelete(sub: string): Promise<EquipmentProps | null> {
        return await model.findOneAndRemove({ pubId: sub });
    }

    async findByIdAndUpdate(
        sub: string,
        data: EquipmentUpdateProps,
    ): Promise<EquipmentProps | null> {
        return await model.findOneAndUpdate({ pubId: sub }, data);
    }

    async save(data: EquipmentProps): Promise<void> {
        await model.create(data);
    }
}
