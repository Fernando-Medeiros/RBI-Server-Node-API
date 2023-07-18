import type { IRequestToDelete } from 'core/requests.interface';
import type { IEquipmentRepository } from './common/equipment.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    req: IRequestToDelete,
    repository: IEquipmentRepository,
) => {
    const { id } = req.getRequestToDelete();

    const result = await repository.findByIdAndDelete(id);

    if (!result) {
        throw new NotFound('Equipments not found!');
    }
};
