import type { Skills } from 'domain/entities/skills.entity';

export type SkillsDto = Skills;

export type UpdateSkillsDto = Partial<Omit<Skills, '_id' | 'pubId'>>;
