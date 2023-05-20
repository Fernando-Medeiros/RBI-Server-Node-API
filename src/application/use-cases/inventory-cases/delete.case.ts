import type { IInventoryRepository } from './repository/inventory.repository.interfaces';
import type { IInventoryRequestsToDelete } from './repository/inventory.requests.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    requests: IInventoryRequestsToDelete,
    repository: IInventoryRepository,
) => {
    const { sub } = requests.getRequestToDelete();

    const result = await repository.findByIdAndDelete(sub);

    if (!result) {
        throw new NotFound('Inventory not found!');
    }
};
