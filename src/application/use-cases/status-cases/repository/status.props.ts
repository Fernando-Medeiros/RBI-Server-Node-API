import type { PropsStatus } from "domain/entities/status/status.interface";

export type StatusProps = PropsStatus;

export type StatusUpdateProps = Partial<Omit<PropsStatus, "_id" | "pubId">>;
