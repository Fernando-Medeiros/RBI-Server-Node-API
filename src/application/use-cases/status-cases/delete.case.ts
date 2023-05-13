import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToDelete } from "./repository/status.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const deleteCase = async (
  requests: IStatusRequestsToDelete,
  repository: IStatusRepository
) => {
  const { sub } = requests.getRequestToDelete();

  if (!(await repository.findByIdAndDelete(sub))) {
    throw new NotFound("Status not found!");
  }
};
