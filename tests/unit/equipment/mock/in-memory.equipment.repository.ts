import type {
    EquipmentDto,
    UpdateEquipmentDto,
} from 'app/use-cases/equipment-cases/common/equipment.dto';
import type { Accessory, Armor, Weapon } from 'domain/items/items.interface';
import { MemoryRepository } from 'tests/unit/in-memory-repository';
import equipmentDataMock from 'example/equipment.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import weaponExample from 'example/items/weapon.example.json';

export class InMemoryEquipmentRepository extends MemoryRepository<
    EquipmentDto,
    UpdateEquipmentDto
> {
    getFakeArmor = (): Armor => armorExample;

    getFakeWeapon = (): Weapon => weaponExample;

    getFakeAccessory = (): Accessory => accessoryExample;

    getDataMock = (): EquipmentDto => Object.assign({}, equipmentDataMock);
}
