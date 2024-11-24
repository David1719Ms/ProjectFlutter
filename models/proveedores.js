import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const provSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'The name is required'],
        minlength: [2, 'Min 2 characters'],
    },
    City: {
        type: String,
        required: [true, 'The city is required'],
        minlength: [2, 'Min 2 characters'],
    },
    Addres: {
        type: String,
        required: [true, 'Addres is required'],
    },
    Cellphone: {
        type: String,
        required: [true, 'Cellphone is required'],
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
    }
});

export default model('Proveedores', provSchema, 'Proveedores');
