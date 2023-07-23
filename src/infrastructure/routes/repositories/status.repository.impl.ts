import type { IStatusRepository } from 'app/use-cases/status-cases/common/status.repository.interface';
import { StatusModel as model } from 'infra/models/status.model';
import type {
    StatusDto,
    UpdateStatusDto,
} from 'app/use-cases/status-cases/common/status.dto';

export class StatusRepository implements IStatusRepository {
    async findById(id: string): Promise<StatusDto | null> {
        return await model.findOne({ pubId: id });
    }

    async findByIdAndDelete(id: string): Promise<StatusDto | null> {
        return await model.findOneAndRemove({ pubId: id });
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateStatusDto,
    ): Promise<StatusDto | null> {
        return await model.findOneAndUpdate({ pubId: id }, data);
    }

    async save(data: StatusDto): Promise<void> {
        await model.create(data);
    }
}
