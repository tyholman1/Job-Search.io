const Job = require("../../models/job.cjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports = {
    update,
    getJob,
    checkToken
}

async function update(req, res) {
    try {
      console.log(req.body)
      const job = await Job.findByIdAndUpdate(req.body.id, {title:req.body.title, description: req.body.description, location: req.body.location, sourceName: req.body.sourceName, link: req.body.link, accepted: false})
      const token = createJWT(job);
      res.json(token);
  
    } catch (err) {
      console.log(err)
      res.status(400).json("Unable to update")
    }
  }

async function getJob(req,res){
    try {
        const job = await Job.findById(req.body.id)
        const token = createJWT(job)
        res.json(token)
    } catch (error) {
        console.log(error)
    }
}

// async function deleteJob(req, res) {
//     try {
//       const job = await Job.findOneAndDelete({email: req.body.email});
//       if (!job) throw new Error("Email Not Found!");
//       res.json("Bye bye")
  
//     } catch (err) {
//       console.log(err)
//       res.status(400).json("try again")
//     }
//   }

function checkToken(req, res){
    console.log(req.job)
    res.json(req.exp)
}

//Helper Function
//function needs 3 params
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }