const express = require("express");
const router = express.Router();
const {
  sayHelloFromProtected,
} = require("../controllers/protectedController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(sayHelloFromProtected);

module.exports = router;
