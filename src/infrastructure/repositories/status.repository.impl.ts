import type { IStatusRepository } from "@app/use-cases/status-cases/repository/status.repository.interfaces";
import type {
  StatusUpdateProps,
  StatusProps,
} from "@app/use-cases/status-cases/repository/status.props";
import { StatusModel as model } from "@inf/models/status.model";

export class StatusRepository implements IStatusRepository {
  async findById(sub: string): Promise<StatusProps | null> {
    return await model.findById({ pubId: sub });
  }

  async findByIdAndDelete(sub: string): Promise<StatusProps | null> {
    return await model.findOneAndRemove({ pubId: sub });
  }

  async findByIdAndUpdate(
    sub: string,
    data: StatusUpdateProps
  ): Promise<StatusProps | null> {
    return await model.findOneAndUpdate({ pubId: sub }, data);
  }

  async save(data: StatusProps): Promise<void> {
    await model.create(data);
  }
}
