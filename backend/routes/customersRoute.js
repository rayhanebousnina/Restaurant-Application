const express = require('express');
const router = express.Router();
const customers = require('../controllers/customersController');

router.get('/alldishes', customers.message);

module.exports = router;