import { Schema, model } from 'mongoose';

const skillsSchema = {
    pubId: {
        type: String,
        required: true,
        index: true,
    },
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

export const SkillsModel = model('Skills', schema);
