const express = require('express');

const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');

/**
 * @route GET /api/
 * @desc GET all job applications
 * @access Public
 */

router.get('/', jobApplicationController.getJobApplications, (req, res) => {
  res.status(200).json(res.locals.jobApplications);
});

/**
 * @route POST /api/jobApplication
 * @desc CREATE new job application
 * @access Public
 */

router.post(
  '/jobApplication',
  jobApplicationController.createJobApplication,
  (req, res) => {
    res.status(200).json({});
  }
);

/**
 * @route PUT /api/jobApplication
 * @desc UPDATE job application by id
 * @access Public
 */

router.patch( 
  '/jobApplication',
  jobApplicationController.updateJobApplicationById,
  (req, res) => {
    res.status(200).json({});
  }
);

/**
 * @route DELETE  /api/jobApplication
 * @desc DELETE job application by id
 * @access Public
 */

router.delete(
  '/jobApplication',
  jobApplicationController.deleteJobApplicationById,
  (req, res) => {
    res.status(200).json({});
  }
);

module.exports = router;
