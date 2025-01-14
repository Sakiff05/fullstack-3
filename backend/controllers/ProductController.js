import { ProductModel } from "../models/ProductModels.js";

export const ProductController = {
    getAll:async(req,res)=>{
        let products = await ProductModel.find()
        res.send(products)
    },
    getById:async(req,res)=>{
        let {id}=req.params
        let findedProduct= await ProductModel.findById(id)
        res.send(
            findedProduct
        )
    },
    postProduct:async(req,res)=>{
        let newProduct = ProductModel(req.body)
        await newProduct.save()
        res.send(
            {data:req.body}
        )
    },
    deleteProduct:async(req,res)=>{
        let {id} = req.params
        await ProductModel.findByIdAndDelete(id)
        res.send(
            {
                message:"successfully deleted"
            }
        )
    },
    updateProduct:async(req,res)=>{
        let {id}=req.params
        let updatedProduct = req.body
        ProductModel.findByIdAndUpdate({_id:id},updatedProduct,{new:true})
        res.send({
            message:"Successfully edit",
            data:req.body
        })
    }
}