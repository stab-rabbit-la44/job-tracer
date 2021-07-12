// import the jobApp Model
const db = require('../models/jobApplicationModels');

const jobApplicationController = {};

// get all jobApplications

jobApplicationController.getJobApplications = (req, res, next) => {
  // create query string
  const queryStr = `
    SELECT * FROM applications
    `;

  // call db query passing in query string

  db.query(queryStr)
    .then((data) => {
      // add the data to res.locals
      res.locals.jobApplications = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.getJobApplications',
        status: 400,
        message: { err },
      });
    });
};

// create new job application

jobApplicationController.createJobApplication = (req, res, next) => {
  // get values from the req body

  const {
    companyName,
    jobTitle,
    salary,
    description,
    postSource,
    notes,
    favorite,
  } = req.body;

  // put values in to a new array

  const jobApplicationValues = [
    companyName,
    jobTitle,
    salary,
    description,
    postSource,
    notes,
    favorite,
  ];

  // make query string

  const queryStr = `
    INSERT INTO 
      applications 
        (company_name,job_title,salary,description,post_source,notes,favorite)
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7)`;

  // call db query passing in query string and values array

  db.query(queryStr, jobApplicationValues)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.createJobApplication',
        status: 400,
        message: { err },
      });
    });
};

// update job application

jobApplicationController.updateJobApplicationById = (req, res, next) => {
  // get id from req query

  const { id } = req.query;

  // get values from req body

  const {
    companyName,
    jobTitle,
    salary,
    description,
    postSource,
    notes,
    favorite,
  } = req.body;

  // add job application id as last array element

  const updatedJobApplicationValues = [
    companyName,
    jobTitle,
    salary,
    description,
    postSource,
    notes,
    favorite,
    id,
  ];

  // make query string

  const queryStr = `
    UPDATE
      applications
    SET 
      company_name = $1,job_title = $2,salary = $3, description = $4,post_source = $5,notes = $6,favorite = $7
    WHERE 
      id = $8  
    `;

  //  query db

  db.query(queryStr, updatedJobApplicationValues)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.updateJobApplicationById',
        status: 400,
        message: { err },
      });
    });
};

// delete job application

jobApplicationController.deleteJobApplicationById = (req, res, next) => {
  // get id from req query
  const { id } = req.query;

  console.log(id);
  // make query string

  const queryStr = `
    DELETE FROM 
      applications
    WHERE 
      id = $1`;

  // query db

  db.query(queryStr, [id])
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.deleteJobApplication',
        status: 400,
        message: { err },
      });
    });
};

module.exports = jobApplicationController;
