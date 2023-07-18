import type { IRequestToUpdate } from 'core/requests.interface';
import type { IStatusRepository } from './common/status.repository.interface';
import type { UpdateStatusDto } from './common/status.dto';

export const updateCase = async (
    req: IRequestToUpdate<UpdateStatusDto>,
    repository: IStatusRepository,
) => {
    const { id, data } = req.getRequestToUpdate();

    await repository.findByIdAndUpdate(id, data);
};
