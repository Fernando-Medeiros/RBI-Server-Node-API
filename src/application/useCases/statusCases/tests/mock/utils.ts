import { InMemoryStatusRepository } from "../mock/inMemoryStatusRepository";

import statusDataMock from "../mock/status.data.mock.json";

const database = new InMemoryStatusRepository();

export class UseCaseStatusHelpers {
  public static insertOneStatusToDatabase = async (): Promise<void> => {
    await database.save(statusDataMock);
  };

  public static removeOneStatusToDatabase = async (): Promise<void> => {
    const { pubId: id } = statusDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getStatusDataMock() {
    return statusDataMock;
  }
}
