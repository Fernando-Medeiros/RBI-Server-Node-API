import type { ISkillsRepository } from 'app/use-cases/skills-cases/common/skills.repository.interface';
import { SkillsModel as model } from 'infra/models/skills.model';
import type {
    SkillsDto,
    UpdateSkillsDto,
} from 'app/use-cases/skills-cases/common/skills.dto';

export class SkillsRepository implements ISkillsRepository {
    async findById(sub: string): Promise<SkillsDto | null> {
        return await model.findOne({ pubId: sub });
    }

    async findByIdAndDelete(sub: string): Promise<SkillsDto | null> {
        return await model.findOneAndRemove({ pubId: sub });
    }

    async findByIdAndUpdate(
        sub: string,
        data: UpdateSkillsDto,
    ): Promise<SkillsDto | null> {
        return await model.findOneAndUpdate({ pubId: sub }, data);
    }

    async save(data: SkillsDto): Promise<void> {
        await model.create(data);
    }
}
