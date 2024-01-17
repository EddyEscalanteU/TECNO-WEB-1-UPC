const {sequelize}=require('../config/mysql');
const Company = require('./../models/Company.models')

exports.get=async(req,res)=>{
try{
    const response=await Company.findAll()
    res.status(200).json({data:response})

}catch(error){
    res.status(500).json({message:'Error del servidor'})
}

}

exports.create=async(req,res)=>{
    try{
        await Company.create(req.body)
        res.status(201).json({message:"Registro creado correctamente"})

    }catch(error){
        console.log(error);
        res.status(500).json({message:'Error del servidor'})
    }
}