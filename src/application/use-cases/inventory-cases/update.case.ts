import type { IRequestToUpdate } from 'core/requests.interface';
import type { IInventoryRepository } from './common/inventory.repository.interface';
import type { UpdateInventoryDto } from './common/inventory.dto';

export const updateCase = async (
    req: IRequestToUpdate<UpdateInventoryDto>,
    repository: IInventoryRepository,
) => {
    const { id, data } = req.getRequestToUpdate();

    await repository.findByIdAndUpdate(id, data);
};
