import type { PropsPackage } from "domain/entities/inventory/inventory.interface";

export type InventoryProps = PropsPackage;

export type InventoryUpdateProps = Partial<Omit<PropsPackage, "_id" | "pubId">>;
