import type { SkillsProps, SkillsUpdateProps } from './skills.props';

export interface ISkillsRepository {
    findById(id: string): Promise<SkillsProps | null>;
    findByIdAndDelete(id: string): Promise<SkillsProps | null>;
    findByIdAndUpdate(
        id: string,
        data: SkillsUpdateProps,
    ): Promise<SkillsProps | null>;
    save(data: SkillsProps): Promise<void>;
}
