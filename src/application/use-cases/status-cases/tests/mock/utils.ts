import type { IStatusRepository } from '../../repository/status.repository.interfaces';
import statusDataMock from 'example/status.data.mock.json';

export class UseCaseStatusHelpers {
    constructor(private database: IStatusRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(statusDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = statusDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): string {
        return statusDataMock.pubId;
    }

    getDataMock() {
        return Object.assign({}, statusDataMock);
    }
}
