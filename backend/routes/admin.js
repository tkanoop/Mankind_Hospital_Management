const express = require('express')
const router = express.Router();
const adminController = require('../controller/admin/adminController')
const upload = require('../util/multer')
router.post('/login',adminController.login)
router.post('/addDepartment',upload.single('image'), adminController.addDepartment)
router.get('/addDoctor',adminController.addDoctor)
router.post('/addDoctor',upload.single('image'), adminController.doctorData)
router.get('/getClients',adminController.getClients)
router.get('/getDoctors',adminController.getDoctors)
router.get('/getDepartments',adminController.getDepartments)

module.exports = router
