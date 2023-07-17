import type { IRequestToCreate } from 'core/requests.interface';
import type { IInventoryRepository } from './common/inventory.repository.interface';
import { BadRequest } from 'utils/http.exceptions';

export const createCase = async (
    req: IRequestToCreate,
    repository: IInventoryRepository,
) => {
    const { id } = req.getRequestToCreate();

    if (await repository.findById(id)) {
        throw new BadRequest('Only one Inventory allowed per character!');
    }
    const inventory = {
        pubId: id,
        armors: [],
        accessories: [],
        consumables: [],
        materials: [],
        weapons: [],
    };

    await repository.save(inventory);
};
