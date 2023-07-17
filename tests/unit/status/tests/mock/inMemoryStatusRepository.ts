import type { Status } from 'domain/entities/status.entity';
import type {
    StatusDto,
    UpdateStatusDto,
} from 'app/use-cases/status-cases/common/status.dto';
import type { IStatusRepository } from 'app/use-cases/status-cases/common/status.repository.interfaces';
import statusDataMock from 'example/status.data.mock.json';

export class InMemoryStatusRepository implements IStatusRepository {
    private database: Status[] = [];
    public helpers: InMemoryHelpers;

    constructor() {
        this.helpers = new InMemoryHelpers(this);
    }

    async findById(id: string): Promise<StatusDto | null> {
        return this.database.find(S => S.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<StatusDto | null> {
        const status = this.database.filter(S => S.pubId === id)[0];

        if (status) {
            this.database = this.database.filter(S => S.pubId != status.pubId);
        }
        return status || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateStatusDto,
    ): Promise<StatusDto | null> {
        const status = this.database.filter(S => S.pubId === id)[0];

        if (status) {
            this.database = this.database.filter(S => S.pubId != status.pubId);
            this.database.push(Object.assign({}, status, data));
        }
        return status || null;
    }

    async save(data: StatusDto): Promise<void> {
        this.database.push(data);
    }
}

class InMemoryHelpers {
    constructor(private database: IStatusRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(statusDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = statusDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): { id: string } {
        return { id: statusDataMock.pubId };
    }

    getDataMock() {
        return Object.assign({}, statusDataMock);
    }
}
