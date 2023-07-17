import type { IRepository } from 'core/repository.interface';
import type { SkillsDto, UpdateSkillsDto } from './skills.dto';

export type ISkillsRepository = IRepository<SkillsDto, UpdateSkillsDto>;
