import type { IRequestToGetById } from 'core/requests.interface';
import type { IInventoryRepository } from './common/inventory.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const getByIdCase = async (
    req: IRequestToGetById,
    repository: IInventoryRepository,
) => {
    const { id } = req.getRequestToGetById();

    const inventory = await repository.findById(id);

    if (!inventory) {
        throw new NotFound('Inventory not found!');
    }

    const { pubId, armors, accessories, consumables, materials, weapons } =
        inventory;

    return { pubId, armors, accessories, consumables, materials, weapons };
};
