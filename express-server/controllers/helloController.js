const asyncHandler = require("express-async-handler");


//@description Say Hello
//@route GET /api/hello
//@access public
const sayHello = asyncHandler(async (_, res) => {
  res.status(200).send("<h1>Hello from Hanko</h1>");
});

module.exports = {
  sayHello,
};
