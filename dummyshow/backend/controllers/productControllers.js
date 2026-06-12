const Product = require("../models/Product")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProducts = async (req, res) => {
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProducts = async (req,res)=>{
    try{
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(products)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProducts = async (req,res)=>{
    try{
        const products = await Product.findByIdAndDelete(req.params.id)
        res.json({message:"deleted sucessful"})
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {getProducts,createProducts,updateProducts,deleteProducts}