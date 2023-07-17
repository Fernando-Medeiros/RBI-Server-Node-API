import type { IEquipmentRepository } from 'app/use-cases/equipment-cases/common/equipment.repository.interface';
import type {
    EquipmentDto,
    UpdateEquipmentDto,
} from 'app/use-cases/equipment-cases/common/equipment.dto';
import equipmentDataMock from 'example/equipment.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import weaponExample from 'example/items/weapon.example.json';
import type { Accessory, Armor, Weapon } from 'domain/items/items.interface';

export class InMemoryEquipmentRepository implements IEquipmentRepository {
    public database: EquipmentDto[] = [];
    public helpers: InMemoryHelpers;

    constructor() {
        this.helpers = new InMemoryHelpers(this);
    }

    async findById(id: string): Promise<EquipmentDto | null> {
        return this.database.find(S => S.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<EquipmentDto | null> {
        const equipment = this.database.filter(S => S.pubId === id)[0];

        if (equipment) {
            this.database = this.database.filter(
                S => S.pubId != equipment.pubId,
            );
        }
        return equipment || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateEquipmentDto,
    ): Promise<EquipmentDto | null> {
        const equipment = this.database.filter(S => S.pubId === id)[0];

        if (equipment) {
            this.database = this.database.filter(
                S => S.pubId != equipment.pubId,
            );
            this.database.push(Object.assign({}, equipment, data));
        }
        return equipment || null;
    }

    async save(data: EquipmentDto): Promise<void> {
        this.database.push(data);
    }
}

export class InMemoryHelpers {
    constructor(private database: IEquipmentRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(equipmentDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = equipmentDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId = (): { id: string } => Object({ id: equipmentDataMock.pubId });

    getFakeArmor = (): Armor => armorExample;

    getFakeWeapon = (): Weapon => weaponExample;

    getFakeAccessory = (): Accessory => accessoryExample;

    getDataMock = () => equipmentDataMock;
}
