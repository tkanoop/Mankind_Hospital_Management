const express=require('express')
const router = express.Router()
const clientController=require('../controller/client/clientController')
router.post('/addClient',clientController.addClient)
router.post('/submit',clientController.submit)

router.post('/login',clientController.login)

module.exports = router