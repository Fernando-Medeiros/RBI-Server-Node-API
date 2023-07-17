import type { IRequestToUpdate } from 'core/requests.interface';
import type { IEquipmentRepository } from './common/equipment.repository.interface';
import type { UpdateEquipmentDto } from './common/equipment.dto';

export const updateCase = async (
    req: IRequestToUpdate<UpdateEquipmentDto>,
    repository: IEquipmentRepository,
) => {
    const { id, data } = req.getRequestToUpdate();

    await repository.findByIdAndUpdate(id, data);
};
