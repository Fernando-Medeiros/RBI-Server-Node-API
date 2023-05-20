import type { IEquipmentRepository } from './repository/equipment.repository.interfaces';
import type { IEquipmentRequestsToUpdate } from './repository/equipment.requests.interfaces';

export const updateCase = async (
    requests: IEquipmentRequestsToUpdate,
    repository: IEquipmentRepository,
) => {
    const { sub, toUpdate } = requests.getRequestToUpdate();

    await repository.findByIdAndUpdate(sub, toUpdate);
};
