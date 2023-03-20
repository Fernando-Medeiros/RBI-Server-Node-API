import type { PropsEquipment } from "@dom/entities/equipment/equipment.interface";

export type EquipmentProps = PropsEquipment;

export type EquipmentUpdateProps = Partial<
  Omit<PropsEquipment, "_id" | "pubId">
>;
