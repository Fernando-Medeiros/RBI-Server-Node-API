import type { ISkillsRepository } from '../../repository/skills.repository.interfaces';
import type { Defensive, Offensive } from 'domain/skills/skills.interface';
import SkillsDataMock from 'example/skills.data.mock.json';
import offensiveExample from 'example/skills/offensive.example.json';
import defensiveExample from 'example/skills/defensive.example.json';

export class UseCaseSkillsHelpers {
    constructor(private database: ISkillsRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(SkillsDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = SkillsDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): string {
        return SkillsDataMock.pubId;
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
