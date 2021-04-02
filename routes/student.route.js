const express = require('express');
const router = express.Router();


const student_controller = require('../controllers/student.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test',student_controller.test );


//http://localhost:3000/students/create
router.post('/create',student_controller.student_create);

//http://localhost:3000/students/id
router.get('/:id',student_controller.student_details);

//http://localhost:3000/students/id/update
router.put('/:id/update',student_controller.student_update);

//http://localhost:3000/students/id/delete
router.delete('/:id/delete',student_controller.student_delete);

//export the roouter here
module.exports = router;
