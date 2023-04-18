import { InMemoryStatusRepository } from "./inMemoryStatusRepository";

import statusDataMock from "example/status.data.mock.json";

const database = new InMemoryStatusRepository();

export class UseCaseStatusHelpers {
  public static insertOneToDatabase = async (): Promise<void> => {
    await database.save(statusDataMock);
  };

  public static removeOneToDatabase = async (): Promise<void> => {
    const { pubId: id } = statusDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getDataMock() {
    return Object.assign({}, statusDataMock);
  }
}
