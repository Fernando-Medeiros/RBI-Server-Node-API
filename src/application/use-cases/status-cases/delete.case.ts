import type { IRequestToDelete } from 'core/requests.interface';
import type { IStatusRepository } from './common/status.repository.interfaces';
import { NotFound } from 'utils/http.exceptions';

export const deleteCase = async (
    req: IRequestToDelete,
    repository: IStatusRepository,
) => {
    const { id } = req.getRequestToDelete();

    if (!(await repository.findByIdAndDelete(id))) {
        throw new NotFound('Status not found!');
    }
};
