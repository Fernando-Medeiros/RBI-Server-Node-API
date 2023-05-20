import type { ISkillsRepository } from '../../repository/skills.repository.interfaces';
import type {
    SkillsProps,
    SkillsUpdateProps,
} from '../../repository/skills.props';

const inMemoryDatabase: SkillsProps[] = [];

export class InMemorySkillsRepository implements ISkillsRepository {
    public database = inMemoryDatabase;

    async findById(id: string): Promise<SkillsProps | null> {
        return this.database.find(INV => INV.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<SkillsProps | null> {
        const Skills = this.database.filter(INV => INV.pubId === id)[0];

        if (Skills) {
            this.database = this.database.filter(
                INV => INV.pubId != Skills.pubId,
            );
        }

        return Skills || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: SkillsUpdateProps,
    ): Promise<SkillsProps | null> {
        const Skills = this.database.filter(INV => INV.pubId === id)[0];

        if (Skills) {
            this.database = this.database.filter(
                INV => INV.pubId != Skills.pubId,
            );
            this.database.push(Object.assign({}, Skills, data));
        }

        return Skills || null;
    }

    async save(data: SkillsProps): Promise<void> {
        this.database.push(data);
    }
}
