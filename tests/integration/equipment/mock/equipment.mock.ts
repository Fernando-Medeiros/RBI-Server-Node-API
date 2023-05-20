import type { EquipmentProps } from 'app/use-cases/equipment-cases/repository/equipment.props';
import equipmentDataMock from 'example/equipment.data.mock.json';
import { v4 } from 'uuid';

export class EquipmentMock {
    protected props: EquipmentProps;

    constructor() {
        this.props = { ...equipmentDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): EquipmentProps {
        return this.props;
    }
}
