const express = require('express');

const router = express.Router();

const jobApplicationController = require('../controllers/jobApplicationController');

/**
 * @route GET /
 * @desc GET All job applications
 * @access Public
 */

router.get('/', jobApplicationController.getJobApplications, (req, res) => {
  res.status(200).json(res.locals.jobApplications);
});

/**
 * @route POST /jobApplication
 * @desc Create new job application
 * @access Public
 */

// router.post(
//   '/jobApplications',
//   jobApplicationController.createJobApplication,
//   (req, res) => {
//     res.status(200).json({});
//   }
// );

// /**
//  * @route PATCH /jobApplications/:id
//  * @desc Update job application by id
//  * @access Public
//  */

// router.patch(
//   '/jobApplications/:id',
//   jobApplicationController.updateJobApplication,
//   (req, res) => {
//     res.status(200).json(res.locals.newJobApplication);
//   }
// );

// /**
//  * @route DELETE  /jobApplications/:id
//  * @desc Delete job application by id
//  * @access Public
//  */

// router.delete(
//   '/jobApplications/:id',
//   jobApplicationController.deleteJobApplication,
//   (req, res) => {}
// );

module.exports = router;
