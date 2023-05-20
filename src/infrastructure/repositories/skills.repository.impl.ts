import type { ISkillsRepository } from 'app/use-cases/skills-cases/repository/skills.repository.interfaces';
import type {
    SkillsUpdateProps,
    SkillsProps,
} from 'app/use-cases/skills-cases/repository/skills.props';
import { SkillsModel as model } from 'infra/models/skills.model';

export class SkillsRepository implements ISkillsRepository {
    async findById(sub: string): Promise<SkillsProps | null> {
        return await model.findOne({ pubId: sub });
    }

    async findByIdAndDelete(sub: string): Promise<SkillsProps | null> {
        return await model.findOneAndRemove({ pubId: sub });
    }

    async findByIdAndUpdate(
        sub: string,
        data: SkillsUpdateProps,
    ): Promise<SkillsProps | null> {
        return await model.findOneAndUpdate({ pubId: sub }, data);
    }

    async save(data: SkillsProps): Promise<void> {
        await model.create(data);
    }
}
