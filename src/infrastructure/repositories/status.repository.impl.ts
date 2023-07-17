import type { IStatusRepository } from 'app/use-cases/status-cases/common/status.repository.interface';
import { StatusModel as model } from 'infra/models/status.model';
import type {
    StatusDto,
    UpdateStatusDto,
} from 'app/use-cases/status-cases/common/status.dto';

export class StatusRepository implements IStatusRepository {
    async findById(sub: string): Promise<StatusDto | null> {
        return await model.findOne({ pubId: sub });
    }

    async findByIdAndDelete(sub: string): Promise<StatusDto | null> {
        return await model.findOneAndRemove({ pubId: sub });
    }

    async findByIdAndUpdate(
        sub: string,
        data: UpdateStatusDto,
    ): Promise<StatusDto | null> {
        return await model.findOneAndUpdate({ pubId: sub }, data);
    }

    async save(data: StatusDto): Promise<void> {
        await model.create(data);
    }
}
