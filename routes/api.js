var express = require('express');
var router = express.Router();

const Student = require('../models').Student;
const Teacher = require('../models').Teacher;

/* CURRENT GET ROUTES */

// Get all students route/endpoint
router.get('/students', async (req, res, next) => {
    const students = await Student.findAll();
    res.json(students);
});

// Get all teachers route/endpoint
router.get('/teachers', async (req, res, next) => {
  const teachers = await Teacher.findAll();
  res.json(teachers)
})


/* CURRENT POST ROUTES */

// Create student route/endpoint
router.post('/student/create', async (req, res, next) => {
  await Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  res.send("You successfully created a student")
})


router.post('/teacher/create', async (req, res, next) => {
  await Teacher.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  res.send("You successfully created a teacher")
})


module.exports = router;
