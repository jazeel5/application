const express = require('express');
const router = express.Router();

const { Register, Login } = require('../controllers/teacher_controller')



// api REGISTER -------------------------------------------------------------------
router.post('/register', Register)



// api LOGIN --------------------------------------------------------------
router.post('/login', Login)


module.exports = router