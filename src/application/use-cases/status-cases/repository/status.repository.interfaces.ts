import type { StatusProps, StatusUpdateProps } from "./status.props";

export interface IStatusRepository {
  findById(id: string): Promise<StatusProps | null>;
  findByIdAndDelete(id: string): Promise<StatusProps | null>;
  findByIdAndUpdate(id: string, data: StatusUpdateProps): Promise<StatusProps | null>;
  save(data: StatusProps): Promise<void>;
}
