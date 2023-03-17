import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToDelete } from "./repository/status.requests.interfaces";
import { NotFound } from "@root/src/utils/http.exceptions";

export const deleteCase = async (
  requests: IStatusRequestsToDelete,
  repository: IStatusRepository
) => {
  const { sub } = requests.getRequestToDelete();

  const result = await repository.findByIdAndDelete(sub);

  if (result === null) {
    throw new NotFound("Status not found!");
  }
};
