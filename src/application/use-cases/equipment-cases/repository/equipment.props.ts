import type { PropsEquipment } from "domain/entities/equipment/equipment.interface";

export type EquipmentProps = PropsEquipment;

export type EquipmentUpdateProps = Partial<
  Omit<PropsEquipment, "_id" | "pubId">
>;
