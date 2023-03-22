import { Schema, model } from "mongoose";

const equipmentsSchema = {
  pubId: {
    type: String,
    required: true,
    index: true,
  },
  head: {
    type: Object,
    default: {},
  },
  body: {
    type: Object,
    default: {},
  },
  leg: {
    type: Object,
    default: {},
  },
  handLeft: {
    type: Object,
    default: {},
  },
  handRight: {
    type: Object,
    default: {},
  },
  accessoryLeft: {
    type: Object,
    default: {},
  },
  accessoryRight: {
    type: Object,
    default: {},
  },
};

const schema = new Schema(equipmentsSchema);

export const EquipmentsModel = model("Equipments", schema);
