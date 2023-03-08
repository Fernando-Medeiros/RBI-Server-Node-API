import { Schema, model } from "mongoose";

const inventoriesSchema = {
  armors: {
    type: Array,
    default: [],
  },
  weapons: {
    type: Array,
    default: [],
  },
  consumables: {
    type: Array,
    default: [],
  },
  materials: {
    type: Array,
    default: [],
  },
};

const schema = new Schema(inventoriesSchema);

export const InventoriesModel = model("Inventories", schema);
