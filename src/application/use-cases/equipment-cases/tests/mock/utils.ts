import type { IEquipmentRepository } from '../../repository/equipment.repository.interfaces';
import equipmentDataMock from 'example/equipment.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import weaponExample from 'example/items/weapon.example.json';

export class UseCaseEquipmentsHelpers {
    constructor(protected database: IEquipmentRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(equipmentDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = equipmentDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): string {
        return equipmentDataMock.pubId;
    }

    getDataMock() {
        return Object.assign({}, equipmentDataMock);
    }

    getFakeArmor() {
        return armorExample;
    }

    getFakeWeapon() {
        return weaponExample;
    }

    getFakeAccessory() {
        return accessoryExample;
    }
}
