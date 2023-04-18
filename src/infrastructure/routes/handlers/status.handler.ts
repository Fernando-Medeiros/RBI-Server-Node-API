import type { Request } from "express";

import { StatusRepository } from "infra/repositories/status.repository.impl";
import { StatusRequestsToCreate } from "app/use-cases/status-cases/requests/create.requests";
import { StatusRequestsToDelete } from "app/use-cases/status-cases/requests/delete.requests";
import { StatusRequestsToUpdate } from "app/use-cases/status-cases/requests/update.requests";
import { StatusRequestsToGetById } from "app/use-cases/status-cases/requests/get-by-id.requests";

import { createCase } from "app/use-cases/status-cases/create.case";
import { deleteCase } from "app/use-cases/status-cases/delete.case";
import { getByIdCase } from "app/use-cases/status-cases/get-by-id.case";
import { updateCase } from "app/use-cases/status-cases/update.case";

export const StatusHandler = {
  async getStatusById(req: Request) {
    const { id } = req.params;

    return await getByIdCase(
      new StatusRequestsToGetById(id as string),
      new StatusRepository()
    );
  },

  async createStatus(req: Request) {
    const { sub } = req.headers;

    return await createCase(
      new StatusRequestsToCreate(sub as string),
      new StatusRepository()
    );
  },

  async deleteStatus(req: Request) {
    const { sub } = req.headers;

    return await deleteCase(
      new StatusRequestsToDelete(sub as string),
      new StatusRepository()
    );
  },

  async updateStatus(req: Request) {
    const { sub } = req.headers;
    const {
      points,
      experience,
      strength,
      intelligence,
      dexterity,
      vitality,
      health,
      energy,
      currentHealth,
      currentEnergy,
    } = req.body;

    return await updateCase(
      new StatusRequestsToUpdate(sub as string, {
        points,
        experience,
        strength,
        intelligence,
        dexterity,
        vitality,
        health,
        energy,
        currentHealth,
        currentEnergy,
      }),
      new StatusRepository()
    );
  },
};
