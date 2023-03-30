const express=require('express')
const router = express.Router()
const doctorController=require('../controller/doctor/doctorController')
router.post('/login',doctorController.doctorLogin)



module.exports = router