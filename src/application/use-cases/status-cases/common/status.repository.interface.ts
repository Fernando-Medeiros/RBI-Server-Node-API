import type { IRepository } from 'core/repository.interface';
import type { StatusDto, UpdateStatusDto } from './status.dto';

export type IStatusRepository = IRepository<StatusDto, UpdateStatusDto>;
