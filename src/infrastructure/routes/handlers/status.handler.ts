import type { Request } from 'express';
import { StatusRepository } from '../repositories/status.repository.impl';
import { StatusRequests } from '../requests/status.request.impl';
import { createCase } from 'app/use-cases/status-cases/create.case';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { updateCase } from 'app/use-cases/status-cases/update.case';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';

export default class StatusHandler {
    private static readonly Repository = new StatusRepository();

    static async getStatusById(req: Request) {
        return getByIdCase(
            new StatusRequests({ ...req.params, ...req.body }),
            StatusHandler.Repository,
        );
    }

    static async createStatus(req: Request) {
        return createCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }

    static async deleteStatus(req: Request) {
        return deleteCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }

    static async updateStatus(req: Request) {
        return updateCase(
            new StatusRequests({ ...req.headers, ...req.body }),
            StatusHandler.Repository,
        );
    }
}
