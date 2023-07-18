import type { SkillsDto } from 'app/use-cases/skills-cases/common/skills.dto';
import skillsDataMock from 'example/skills.data.mock.json';
import { v4 } from 'uuid';

export class SkillsMock {
    private props: SkillsDto;

    constructor() {
        this.props = { ...skillsDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): SkillsDto {
        return this.props;
    }
}
