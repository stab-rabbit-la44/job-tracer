// import the jobApp Model
const db = require('../models/jobApplicationModels');

const jobApplicationController = {};

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

jobApplicationController.createJobApplication = (req, res, next) => {
  // get values from the req.body
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

  const queryStr = `
    INSERT INTO 
      applications 
        (company_name,job_title,salary,description,post_source,notes,favorite)
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7)`;

  // call db query passing in query string
  db.query(queryStr, jobApplicationValues)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.createJobApplications',
        status: 400,
        message: { err },
      });
    });

  // call database and pass in values;
  // catch any errors
  // return next
};

jobApplicationController.deleteJobApplicationById = (req, res, next) => {
  const { id } = req.query;
  const queryStr = `DELETE FROM applications
  WHERE id = $1`;
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

jobApplicationController.updateJobApplicationById = (req, res, next) => {
  const { id } = req.query;

  const {
    companyName,
    jobTitle,
    salary,
    description,
    postSource,
    notes,
    favorite,
  } = req.body;

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

  const queryStr = `
    UPDATE
      applications
    SET 
      company_name = $1,job_title = $2,salary = $3, description = $4,post_source = $5,notes = $6,favorite = $7
    WHERE 
      id = $8  
    `;

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
module.exports = jobApplicationController;
