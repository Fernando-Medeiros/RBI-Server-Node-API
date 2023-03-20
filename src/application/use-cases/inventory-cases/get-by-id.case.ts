import type { IInventoryRepository } from "./repository/inventory.repository.interfaces";
import type { IInventoryRequestsToGetById } from "./repository/inventory.requests.interfaces";
import { NotFound } from "@src/utils/http.exceptions";

export const getByIdCase = async (
  requests: IInventoryRequestsToGetById,
  repository: IInventoryRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const inventory = await repository.findById(sub);

  if (inventory === null) {
    throw new NotFound("Inventory not found!");
  }

  return inventory;
};
