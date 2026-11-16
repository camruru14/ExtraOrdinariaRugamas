const ProductsController = {};

import ProductsModel from "../models/ProductsModel";

ProductsController.getProducts = async (req, res) =>{
    const products = await ProductsModel.find();
    res.json(products);
};

ProductsController.inserProducts = async(req, res) => {
    const {nombre, descripcion, precio, stock, marca, fechaVencimiento } = req.body;
    const newProduct = new ProductsModel({nombre, descripcion, precio, stock, marca, fechaVencimiento});
    await newProduct.save();
    
    res.json({message:"Producto guardado"});
};

ProductsController.updateProducts = async (req, res) =>{
    const {nombre, descripcion, precio, stock, marca, fechaVencimiento} = req.body;
    await ProductsModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            descripcion,
            precio,
            stock,
            marca,
            fechaVencimiento,
        },
        {new: true},
    );

    res.json({message: "Producto actualizado"});
};

ProductsController.deleteProducts = async (req, res) => {
    await ProductsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Producto eliminado"})
};

export default ProductsController;

