import type { IInventoryRepository } from './repository/inventory.repository.interfaces';
import type { IInventoryRequestsToUpdate } from './repository/inventory.requests.interfaces';

export const updateCase = async (
    requests: IInventoryRequestsToUpdate,
    repository: IInventoryRepository,
) => {
    const { sub, toUpdate } = requests.getRequestToUpdate();

    await repository.findByIdAndUpdate(sub, toUpdate);
};
