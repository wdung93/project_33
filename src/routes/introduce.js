const express = require('express');
const router = express.Router();

const introduceController = require('../app/Controllers/IntroduceController');

router.get('/', introduceController.index);

module.exports = router;