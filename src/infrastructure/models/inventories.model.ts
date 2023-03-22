import { Schema, model } from "mongoose";

const inventoriesSchema = {
  pubId: {
    type: String,
    required: true,
    index: true,
  },
  armors: {
    type: Array,
    default: [],
  },
  accessories: {
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
  weapons: {
    type: Array,
    default: [],
  },
};

const schema = new Schema(inventoriesSchema);

export const InventoriesModel = model("Inventories", schema);
