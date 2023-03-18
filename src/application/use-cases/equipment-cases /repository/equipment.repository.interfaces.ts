import type { EquipmentProps, EquipmentUpdateProps } from "./equipment.props";

export interface IEquipmentRepository {
  findById(sub: string): Promise<EquipmentProps | null>;
  findByIdAndDelete(sub: string): Promise<EquipmentProps | null>;
  findByIdAndUpdate(sub: string, data: EquipmentUpdateProps): Promise<EquipmentProps | null>;
  save(data: EquipmentProps): Promise<void>;
}
