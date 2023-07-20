import type {
    StatusDto,
    UpdateStatusDto,
} from 'app/use-cases/status-cases/common/status.dto';
import { MemoryRepository } from 'tests/unit/in-memory-repository';
import statusDataMock from 'example/status.data.mock.json';

export class InMemoryStatusRepository extends MemoryRepository<
    StatusDto,
    UpdateStatusDto
> {
    getDataMock = (): StatusDto => Object.assign({}, statusDataMock);
}
