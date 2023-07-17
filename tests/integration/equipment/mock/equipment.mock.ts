import type { EquipmentDto } from 'app/use-cases/equipment-cases/common/equipment.dto';
import equipmentDataMock from 'example/equipment.data.mock.json';
import { v4 } from 'uuid';

export class EquipmentMock {
    protected props: EquipmentDto;

    constructor() {
        this.props = { ...equipmentDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): EquipmentDto {
        return this.props;
    }
}
