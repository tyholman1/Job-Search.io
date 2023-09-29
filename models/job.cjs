const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required:true},
    location: String,
    sourceName: String,
    link: String,
    accepted: boolean,
    }, {
        timestamps: true,
})

export const job = mongoose.model('Job', jobSchema);
// module.exports = model("Job", jobSchema)