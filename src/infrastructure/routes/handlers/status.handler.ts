import type { Request } from 'express';
import { StatusRepository } from 'infra/repositories/status.repository.impl';
import { StatusRequests } from 'infra/routes/requests/status.request';
import { createCase } from 'app/use-cases/status-cases/create.case';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';
import { updateCase } from 'app/use-cases/status-cases/update.case';

export class StatusHandler {
    private readonly Repository = new StatusRepository();

    async getStatusById(req: Request) {
        return await getByIdCase(
            new StatusRequests({ ...req.params, ...req.body }),
            this.Repository,
        );
    }

    async createStatus(req: Request) {
        return await createCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            this.Repository,
        );
    }

    async deleteStatus(req: Request) {
        return await deleteCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            this.Repository,
        );
    }

    async updateStatus(req: Request) {
        return await updateCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            this.Repository,
        );
    }
}
