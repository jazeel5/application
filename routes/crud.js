const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const { Insert, Get_Student, Delete, Update, Get_Single_Student } = require('../controllers/student_controller')



// api INSERT -------------------------------------------------------------------
router.post('/insert', [
  body('name', "name error").isLength({ min: 1 }),
  body('phone', "phone error").isLength({ min: 1 }),
  body('email', "email error").isLength({ min: 1 }),
  body('address', "address error").isLength({ min: 1 })
], Insert)


// api GET_STUDENTS --------------------------------------------------------------
router.get('/get_students', Get_Student)


// api DELETE_STUDENT --------------------------------------------------------------
router.delete('/delete_student/:id', Delete)


// api UPDATE_STUDENT --------------------------------------------------------------
router.put('/update_student/:id', Update)


// api GET SINGLE STUDENT --------------------------------------------------------------
router.get('/get_single_student/:id', Get_Single_Student)


module.exports = router