import type { IInventoryRepository } from "./repository/inventory.repository.interfaces";
import type { IInventoryRequestsToCreate } from "./repository/inventory.requests.interfaces";
import { BadRequest } from "utils/http.exceptions";

export const createCase = async (
  requests: IInventoryRequestsToCreate,
  repository: IInventoryRepository
) => {
  const { sub } = requests.getRequestToCreate();

  if (await repository.findById(sub)) {
    throw new BadRequest("Only one Inventory allowed per character!");
  }
  const inventory = {
    pubId: sub,
    armors: [],
    accessories: [],
    consumables: [],
    materials: [],
    weapons: [],
  };

  await repository.save(inventory);
};
