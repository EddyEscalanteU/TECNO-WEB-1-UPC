const express = require("express");
const router = express.Router();
const companyController= require('./../controllers/company.controller')

router.post('/company', companyController.create);
router.get('/company',companyController.get);


module.exports = router;