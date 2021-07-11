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

// jobApplicationController.createJobApplication = async (req, res, next) => {
//   // need to access the req.body of user new entry
//   const newJobApplication = req.body;

//   res.locals.newJobApplication = newJobApplication;

//   return next();

//   // call database and pass in values;
//   // catch any errors
//   // return next
// };

module.exports = jobApplicationController;
