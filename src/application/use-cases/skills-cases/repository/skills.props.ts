import type { Skills } from 'domain/entities/skills.entity';

export type SkillsProps = Skills;

export type SkillsUpdateProps = Partial<Omit<Skills, '_id' | 'pubId'>>;
