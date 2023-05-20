import type { Status } from 'domain/entities/status.entity';

export type StatusProps = Status;

export type StatusUpdateProps = Partial<Omit<Status, '_id' | 'pubId'>>;
