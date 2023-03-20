import type { IInventoryRepository } from "./repository/inventory.repository.interfaces";
import type { IInventoryRequestsToCreate } from "./repository/inventory.requests.interfaces";
import { Inventory } from "@dom/entities/inventory/inventory";
import { BadRequest } from "@src/utils/http.exceptions";

export const createCase = async (
  requests: IInventoryRequestsToCreate,
  repository: IInventoryRepository
) => {
  const { sub } = requests.getRequestToCreate();

  if (await repository.findById(sub)) {
    throw new BadRequest("Only one Inventory allowed per character!");
  }
  const inventory = new Inventory({
    pubId: sub,
    armors: [],
    accessories: [],
    consumables: [],
    materials: [],
    weapons: [],
  });

  await repository.save(inventory.getDataToSave());
};
