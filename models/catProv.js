import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategoriaSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
});

export default model('Categorias', CategoriaSchema, 'Categorias');
