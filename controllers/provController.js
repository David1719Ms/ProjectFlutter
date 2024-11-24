import express from 'express';
import Proveedor from '../models/proveedores.js';

const router = express.Router();

// Get
export const getProv = async (req, res) => {
    let msg = 'Proveedores obtenidos';
    let data = [];

    try {
        data = await Proveedor.find(); // Obtener todos los proveedores
    } catch (error) {
        msg = error.message;
    }

    res.json({ msg: msg, data: data });
};

export async function getOneProveedor(req, res){
    const {id}= req.params
    const proveedor = await Proveedor.findById(id)
    res.json(proveedor)
}


// Post
export const postProv = async (req, res) => {
    let msg = 'Proveedor insertado';
    const body = req.body;

    try {
        const proveedor = new Proveedor(body); 
        await proveedor.save();
    } catch (error) {
        msg = error.message;
    }

    res.json({ msg: msg });
};

// Put
export const putProv = async (req, res) => {
    let msg = 'Proveedor actualizado';
    const { id } = req.params;
    const body = req.body;

    try {
        const updatedProv = await Proveedor.findByIdAndUpdate(id, body, { new: true }); // Actualiza el proveedor
        if (!updatedProv) {
            msg = 'Proveedor no encontrado';
        }
    } catch (error) {
        msg = error.message;
    }

    res.json({ msg: msg });
};

// Delete
export const deleteProv = async (req, res) => {
    let msg = 'Proveedor eliminado';
    const { id } = req.params;

    try {
        const deletedProv = await Proveedor.findByIdAndDelete(id);
        if (!deletedProv) {
            msg = 'Proveedor no encontrado';
        }
    } catch (error) {
        msg = error.message;
    }

    res.json({ msg: msg });
};

router.post('/', postProv);
router.get('/', getProv);
router.get('/:id',getOneProveedor)
router.put('/:id', putProv);
router.delete('/:id', deleteProv);

export default router;
