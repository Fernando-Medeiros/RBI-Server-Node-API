import type {
    SkillsDto,
    UpdateSkillsDto,
} from 'app/use-cases/skills-cases/common/skills.dto';
import type { Defensive, Offensive } from 'domain/skills/skills.interface';
import { MemoryRepository } from 'tests/unit/in-memory-repository';
import skillsDataMock from 'example/skills.data.mock.json';
import offensiveExample from 'example/skills/offensive.example.json';
import defensiveExample from 'example/skills/defensive.example.json';

export class InMemorySkillsRepository extends MemoryRepository<
    SkillsDto,
    UpdateSkillsDto
> {
    getDataMock = (): SkillsDto => Object.assign({}, skillsDataMock);

    getFakeOffensiveSkill = (): Offensive => offensiveExample;

    getFakeDefensiveSkill = (): Defensive => defensiveExample;
}
