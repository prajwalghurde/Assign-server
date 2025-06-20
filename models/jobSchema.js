const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
    min_salary: {
      type: Number,
      required: true,
    },
    max_salary: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;