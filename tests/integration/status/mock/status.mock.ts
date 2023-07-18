import type { StatusDto } from 'app/use-cases/status-cases/common/status.dto';
import statusDataMock from 'example/status.data.mock.json';
import { v4 } from 'uuid';

export class StatusMock {
    private props: StatusDto;

    constructor() {
        this.props = { ...statusDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): StatusDto {
        return this.props;
    }
}
