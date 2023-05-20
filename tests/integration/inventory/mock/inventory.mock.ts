import type { Inventory } from 'domain/entities/inventory.entity';
import inventoryDataMock from 'example/inventory.data.mock.json';
import { v4 } from 'uuid';

export class InventoryMock {
    private props: Inventory;

    constructor() {
        this.props = { ...inventoryDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): Inventory {
        return this.props;
    }
}
