const express = require("express");
const router = express.Router()

const {
    sayValidated,
} = require('../controllers/apiController')

router.use(require('../middleware/validateTokenHandler'))

router.route('/').get(sayValidated);

module.exports = router;
