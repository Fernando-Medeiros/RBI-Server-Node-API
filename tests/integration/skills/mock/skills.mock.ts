import type { SkillsProps } from 'app/use-cases/skills-cases/repository/skills.props';
import skillsDataMock from 'example/skills.data.mock.json';
import { v4 } from 'uuid';

export class SkillsMock {
    private props: SkillsProps;

    constructor() {
        this.props = { ...skillsDataMock, ...{ pubId: v4() } };
    }

    get pubId(): string {
        return this.props.pubId;
    }

    get dataToCreate(): SkillsProps {
        return this.props;
    }
}
