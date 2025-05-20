const asyncHandler = require("express-async-handler");

const sayValidated = asyncHandler(async (req, res) => {
  res.status(200).send("<h1>You are validated.</h1>");
});

module.exports = {
    sayValidated,
};