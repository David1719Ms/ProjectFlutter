import express from 'express';
import Categoria from '../models/catProv.js'; 

const router = express.Router();

// Get
const getCat = async (req, res) => {
    try {
        const categoria = await Categoria.find();
        res.json({categoria});
    } catch (error) {
        res.json({ msg: error.message });
    }
};

export async function getOneCategoria(req, res){
    const {id}= req.params
    const categoria = await Categoria.findById(id)
    res.json(categoria)
}


// Post
const postCat = async (req, res) => {
    try {
        const Cate = new Categoria(req.body);
        await Cate.save();
        res.json({ msg: 'Categoría insertada' });
    } catch (error) {
        res.json({ msg: error.message });
    }
};

// Put
const putCat = async (req, res) => {
    try {
        const updatedCat = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCat) {
            res.json({ msg: 'Categoría no encontrada' });
        } else {
            res.json({ msg: 'Categoría actualizada', data: updatedCat });
        }
    } catch (error) {
        res.json({ msg: error.message });
    }
};

// Delete
const deleteCat = async (req, res) => {
    try {
        const deletedCat = await Categoria.findByIdAndDelete(req.params.id);
        if (!deletedCat) {
            res.json({ msg: 'Categoría no encontrada' });
        } else {
            res.json({ msg: 'Categoría eliminada' });
        }
    } catch (error) {
        res.json({ msg: error.message });
    }
};

router.post('/', postCat);
router.get('/', getCat);
router.get('/:id',getOneCategoria)
router.put('/:id', putCat);
router.delete('/:id', deleteCat);

export default router;
