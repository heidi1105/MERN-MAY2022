const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: [true, "Title cannot be empty"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    company:{
        type: String, 
        required: [true, "Company cannot be empty"]
    },
    salary:{
        type: Number,
        required: [true, "Salary cannot be empty"],
        min: [70000, "Salary must be at least 70000"]
    },
    isRemote:{
        type: Boolean,
        required: [true, "Remote cannot be empty"]
    }
}, {timestamps: true})

module.exports.Job = mongoose.model("Job", JobSchema)