import type { IStatusRepository } from "app/use-cases/status-cases/repository/status.repository.interfaces";
import type {
  StatusProps,
  StatusUpdateProps,
} from "app/use-cases/status-cases/repository/status.props";

const inMemoryDatabase: StatusProps[] = [];

export class InMemoryStatusRepository implements IStatusRepository {
  public database = inMemoryDatabase;

  async findById(id: string): Promise<StatusProps | null> {
    return this.database.find((S) => S.pubId === id) || null;
  }

  async findByIdAndDelete(id: string): Promise<StatusProps | null> {
    const status = this.database.filter((S) => S.pubId === id)[0];

    if (status) {
      this.database = this.database.filter((S) => S.pubId != status.pubId);
    }

    return status || null;
  }

  async findByIdAndUpdate(
    id: string,
    data: StatusUpdateProps
  ): Promise<StatusProps | null> {
    const status = this.database.filter((S) => S.pubId === id)[0];

    if (status) {
      this.database = this.database.filter((S) => S.pubId != status.pubId);
      this.database.push(Object.assign({}, status, data));
    }

    return status || null;
  }

  async save(data: StatusProps): Promise<void> {
    this.database.push(data);
  }
}
