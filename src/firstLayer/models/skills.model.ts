import { Schema, model } from "mongoose";

const skillsSchema = {
  offensive: {
    type: Array,
    default: [],
  },
  defensive: {
    type: Array,
    default: [],
  },
};

const schema = new Schema(skillsSchema);

export const SkillsModel = model("Skills", schema);
