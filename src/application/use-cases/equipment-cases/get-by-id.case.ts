import type { IEquipmentRepository } from './repository/equipment.repository.interfaces';
import type { IEquipmentRequestsToGetById } from './repository/equipment.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    requests: IEquipmentRequestsToGetById,
    repository: IEquipmentRepository,
) => {
    const { sub } = requests.getRequestToGetById();

    const equipments = await repository.findById(sub);

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
