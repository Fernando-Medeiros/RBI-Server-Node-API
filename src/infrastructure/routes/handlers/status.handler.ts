import type { Request } from 'express';
import { StatusRepository } from 'infra/repositories/status.repository.impl';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { createCase } from 'app/use-cases/status-cases/create.case';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { updateCase } from 'app/use-cases/status-cases/update.case';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';

export class StatusHandler {
    private static readonly Repository = new StatusRepository();

    async getStatusById(req: Request) {
        return await getByIdCase(
            new StatusRequests({ ...req.params, ...req.body }),
            StatusHandler.Repository,
        );
    }

    async createStatus(req: Request) {
        return await createCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }

    async deleteStatus(req: Request) {
        return await deleteCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }

    async updateStatus(req: Request) {
        return await updateCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }
}
