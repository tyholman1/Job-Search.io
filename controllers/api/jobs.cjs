const Job = require('../../models/job.cjs')

module.exports = {
    createJob,
    deleteJob,
    updateJob
}



async function updateJob(req,res){
    const job = await Job.findByIdAndUpdate({title: req.body.title})
}

async function deleteJob(req,res){
    try {
        const job = await Job.findByIdAndDelete({title: req.body.id})
        res,redirect('/dashboard').status(200)
    } catch (error) {
        res.status(400)
    }
}

async function createJob(req,res){
    try{
        const job = await Job.create(req.body)
        res.status(200).redirect('/dashboard')
    }catch (error){
        res.status(400).json(error)
    }
}