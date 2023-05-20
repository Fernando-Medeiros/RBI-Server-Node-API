import type { IEquipmentRepository } from '../../repository/equipment.repository.interfaces';
import type {
    EquipmentProps,
    EquipmentUpdateProps,
} from '../../repository/equipment.props';

const inMemoryDatabase: EquipmentProps[] = [];

export class InMemoryEquipmentRepository implements IEquipmentRepository {
    public database = inMemoryDatabase;

    async findById(id: string): Promise<EquipmentProps | null> {
        return this.database.find(S => S.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<EquipmentProps | null> {
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
        data: EquipmentUpdateProps,
    ): Promise<EquipmentProps | null> {
        const equipment = this.database.filter(S => S.pubId === id)[0];

        if (equipment) {
            this.database = this.database.filter(
                S => S.pubId != equipment.pubId,
            );
            this.database.push(Object.assign({}, equipment, data));
        }

        return equipment || null;
    }

    async save(data: EquipmentProps): Promise<void> {
        this.database.push(data);
    }
}
