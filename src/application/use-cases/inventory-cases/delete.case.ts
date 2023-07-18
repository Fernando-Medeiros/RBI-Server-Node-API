import type { IRequestToDelete } from 'core/requests.interface';
import type { IInventoryRepository } from './common/inventory.repository.interface';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    requests: IRequestToDelete,
    repository: IInventoryRepository,
) => {
    const { id } = requests.getRequestToDelete();

    const result = await repository.findByIdAndDelete(id);

    if (!result) {
        throw new NotFound('Inventory not found!');
    }
};
