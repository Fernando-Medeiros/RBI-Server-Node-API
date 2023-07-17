import type { ISkillsRepository } from 'app/use-cases/skills-cases/common/skills.repository.interface';
import { SkillsModel as model } from 'infra/models/skills.model';
import type {
    SkillsDto,
    UpdateSkillsDto,
} from 'app/use-cases/skills-cases/common/skills.dto';

export class SkillsRepository implements ISkillsRepository {
    async findById(id: string): Promise<SkillsDto | null> {
        return await model.findOne({ pubId: id });
    }

    async findByIdAndDelete(id: string): Promise<SkillsDto | null> {
        return await model.findOneAndRemove({ pubId: id });
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateSkillsDto,
    ): Promise<SkillsDto | null> {
        return await model.findOneAndUpdate({ pubId: id }, data);
    }

    async save(data: SkillsDto): Promise<void> {
        await model.create(data);
    }
}
