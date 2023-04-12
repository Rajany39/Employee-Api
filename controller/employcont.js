const Employee= require('../Model/employmodel')

const getallrecord =async (req,res) => {
    try {
        const data = await Employee.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : "Bad request"})
    }
}

const createrecord = async (req,res)=>{
    try {
        const data = await Employee.create(req.body)
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : "Bad request"})
    }
}

const getonerecord=async (req,res)=>{
    try {
        const {id:taskid}=req.params
        const data=await Employee.findOne({_id:taskid})
    if(!data){
        res.status(404).json({message : "Invalid Id"})
    }
    res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message:"Invalid Id"})
    }
}

const deleterecords = async (req,res)=>{
    try {
        const {id:taskid} = req.params
        const data = await Employee.findByIdAndDelete({_id:taskid})
    if(!data){
        res.status(404).json({message:"invalid id"})
    }
    res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message:"Invalid Id"})
    }
}

const updaterecords = async (req,res)=>{
    try {
        const {id:taskid} = req.params
        const data = await Employee.findByIdAndUpdate({_id:taskid},req.body)
    if(!data){
        res.status(404).json({message:"invalid id"})
    }
    res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message:"Invalid Id"})
    }
}


module.exports = {
    getallrecord,
    createrecord,
    getonerecord,
    deleterecords,
    updaterecords
}