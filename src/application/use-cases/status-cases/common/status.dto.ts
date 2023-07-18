import type { Status } from 'domain/entities/status.entity';

export type StatusDto = Status;

export type UpdateStatusDto = Partial<Omit<Status, '_id' | 'pubId'>>;
