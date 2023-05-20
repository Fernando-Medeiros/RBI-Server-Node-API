import type { Request } from 'express';
import { StatusRepository } from 'infra/repositories/status.repository.impl';
import { StatusRequestsToCreate } from 'app/use-cases/status-cases/requests/create.requests';
import { StatusRequestsToDelete } from 'app/use-cases/status-cases/requests/delete.requests';
import { StatusRequestsToUpdate } from 'app/use-cases/status-cases/requests/update.requests';
import { StatusRequestsToGetById } from 'app/use-cases/status-cases/requests/get-by-id.requests';
import { createCase } from 'app/use-cases/status-cases/create.case';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';
import { updateCase } from 'app/use-cases/status-cases/update.case';

export class StatusHandler {
    private readonly Repository = new StatusRepository();

    async getStatusById(req: Request) {
        return await getByIdCase(
            new StatusRequestsToGetById(Object(req.params)),
            this.Repository,
        );
    }

    async createStatus(req: Request) {
        return await createCase(
            new StatusRequestsToCreate(Object(req.headers)),
            this.Repository,
        );
    }

    async deleteStatus(req: Request) {
        return await deleteCase(
            new StatusRequestsToDelete(Object(req.headers)),
            this.Repository,
        );
    }

    async updateStatus(req: Request) {
        return await updateCase(
            new StatusRequestsToUpdate(
                Object.assign({}, req.headers, req.body),
            ),
            this.Repository,
        );
    }
}
