import { Schema, model } from 'mongoose';

const characterSchema = {
    pubId: {
        type: String,
        required: true,
        index: true,
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 1000,
        default: 1,
    },
    charName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
        maxlength: 15,
        default: `unknown`,
    },
    className: {
        type: String,
        required: true,
        index: true,
        trim: true,
        minlength: 4,
        maxlength: 20,
        default: 'peasant',
    },
    gender: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 5,
        default: 'man',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};

const schema = new Schema(characterSchema);

export const CharactersModel = model('Characters', schema);
