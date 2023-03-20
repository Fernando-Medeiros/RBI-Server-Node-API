import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToGetById } from "./repository/status.requests.interfaces";
import { NotFound } from "@src/utils/http.exceptions";

export const getByIdCase = async (
  requests: IStatusRequestsToGetById,
  repository: IStatusRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const status = await repository.findById(sub);

  if (status === null) {
    throw new NotFound("Status not found!");
  }

  return status;
};