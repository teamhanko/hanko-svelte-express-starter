const express = require("express");
const router = express.Router()

router.use(require('../middleware/validateTokenHandler'))

module.exports = router;
