const CategoriesController = {};

import CategoriesModel from "../models/CategoriesModel";

CategoriesController.getCategories = async (req, res) =>{
    const categories = await CategoriesModel.find();
    res.json(categories);
};

CategoriesController.insertCategories = async(req, res) => {
    const {nombre, descripcion, estado} = req.body;
    const newCategorie = new CategoriesModel({nombre, descripcion, estado});
    await newCategorie.save();
    
    res.json({message:"Categoria guardada"});
};

CategoriesController.updateCategorie = async (req, res) =>{
    const {nombre, descripcion, estado} = req.body;
    await CategoriesModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            descripcion,
            estado,
        },
        {new: true},
    );

    res.json({message: "Categoria actualizada"});
};

CategoriesController.deletecategorie = async (req, res) => {
    await CategoriesModel.findByIdAndDelete(req.params.id);
    res.json({message: "Categoria eliminado"})
};

export default CategoriesController;

