import type { IRequestToGetById } from 'core/requests.interface';
import type { IEquipmentRepository } from './common/equipment.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    req: IRequestToGetById,
    repository: IEquipmentRepository,
) => {
    const { id } = req.getRequestToGetById();

    const equipments = await repository.findById(id);

    if (!equipments) {
        throw new NotFound('Equipments not found!');
    }

    const {
        pubId,
        head,
        body,
        leg,
        handLeft,
        handRight,
        accessoryLeft,
        accessoryRight,
    } = equipments;

    return {
        pubId,
        head,
        body,
        leg,
        handLeft,
        handRight,
        accessoryLeft,
        accessoryRight,
    };
};
