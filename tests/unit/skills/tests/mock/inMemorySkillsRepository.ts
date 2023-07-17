import type {
    SkillsDto,
    UpdateSkillsDto,
} from 'app/use-cases/skills-cases/common/skills.dto';
import type { ISkillsRepository } from 'app/use-cases/skills-cases/common/skills.repository.interface';
import type { Defensive, Offensive } from 'domain/skills/skills.interface';
import skillsDataMock from 'example/skills.data.mock.json';
import offensiveExample from 'example/skills/offensive.example.json';
import defensiveExample from 'example/skills/defensive.example.json';

export class InMemorySkillsRepository implements ISkillsRepository {
    public database: SkillsDto[] = [];
    public helpers: InMemoryHelpers;

    constructor() {
        this.helpers = new InMemoryHelpers(this);
    }

    async findById(id: string): Promise<SkillsDto | null> {
        return this.database.find(INV => INV.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<SkillsDto | null> {
        const skills = this.database.filter(INV => INV.pubId === id)[0];

        if (skills) {
            this.database = this.database.filter(
                INV => INV.pubId != skills.pubId,
            );
        }
        return skills || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateSkillsDto,
    ): Promise<SkillsDto | null> {
        const skills = this.database.filter(INV => INV.pubId === id)[0];

        if (skills) {
            this.database = this.database.filter(
                INV => INV.pubId != skills.pubId,
            );
            this.database.push(Object.assign({}, skills, data));
        }

        return skills || null;
    }

    async save(data: SkillsDto): Promise<void> {
        this.database.push(data);
    }
}

export class InMemoryHelpers {
    constructor(private database: ISkillsRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(skillsDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = skillsDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): { id: string } {
        return { id: skillsDataMock.pubId };
    }

    getDataMock() {
        return Object.assign(
            {},
            { offensive: [] as Offensive[], defensive: [] as Defensive[] },
        );
    }

    getFakeOffensive() {
        return offensiveExample;
    }

    getFakeDefensive() {
        return defensiveExample;
    }
}
