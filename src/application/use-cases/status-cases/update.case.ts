import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToUpdate } from "./repository/status.requests.interfaces";

export const updateCase = async (
  requests: IStatusRequestsToUpdate,
  repository: IStatusRepository
) => {
  const { sub, toUpdate } = requests.getRequestToUpdate();

  await repository.findByIdAndUpdate(sub, toUpdate);
};
