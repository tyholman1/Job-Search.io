const { Schema, model } = require("mongoose")

const jobSchema = new Schema({
    title: { type: String, required: true},
    location: String,
    sourceName: String,
    link: String,
    accepted: boolean,
    }, {
        timestamps: true,
          // Even though it's hashed - don't serialize the password
})

module.exports = model("Job", jobSchema)