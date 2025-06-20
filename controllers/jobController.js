const Job = require("../models/jobSchema");

const createJob = async (req, res) => {
  const {
    title,
    company,
    location,
    min_salary,
    max_salary,
    job_type,
    deadline,
    description,
  } = req.body;
  console.log(req.body)
  console.log(
    title,
    company,
    location,
    min_salary,
    max_salary,
    job_type,
    deadline,
    description
  );
  if (
    !title ||
    !company ||
    !location ||
    !min_salary ||
    !max_salary ||
    !job_type ||
    !deadline ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    const job = new Job({
      title,
      company,
      location,
      min_salary,
      max_salary,
      job_type,
      deadline,
      description,
    });
    const result = await job.save();
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error creating Job", error });
  }
};

const getAllJobs = async (req, res) => {
  const { search, location, job_type, min_salary, max_salary } = req.query;
  try {
    const query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (location) {
      query.location = location;
    }
    if (job_type) {
      query.job_type = job_type;
    }
    if (min_salary && max_salary) {
      query.min_salary = { $gte: min_salary, $lte: max_salary };

    }

    const jobs = await Job.find(query);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Jobs", error });
  }
};

module.exports = {
  createJob,
  getAllJobs,
};
