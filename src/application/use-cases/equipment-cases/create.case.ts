import type { IRequestToCreate } from 'core/requests.interface';
import type { IEquipmentRepository } from './common/equipment.repository.interface';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    req: IRequestToCreate,
    repository: IEquipmentRepository,
) => {
    const { id } = req.getRequestToCreate();

    if (await repository.findById(id)) {
        throw new BadRequest('Only one equipment allowed per character!');
    }
    const equipment = {
        pubId: id,
        head: {},
        body: {},
        leg: {},
        handLeft: {},
        handRight: {},
        accessoryLeft: {},
        accessoryRight: {},
    };
    await repository.save(equipment);
};
