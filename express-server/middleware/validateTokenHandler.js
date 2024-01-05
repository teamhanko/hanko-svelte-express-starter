const jose = require("jose");
const dotenv = require("dotenv").config();

const JWKS = jose.createRemoteJWKSet(
  new URL(`${process.env.HANKO_API_URL}/.well-known/jwks.json`)
);

async function validateToken(req, res, next) {
  let token = null;
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.hanko) {
    token = req.cookies.hanko;
  }
  if (token === null || token.length === 0) {
    res.status(401).send("Unauthorized");
    return;
  }
  let authError = false;
  await jose.jwtVerify(token, JWKS).catch((err) => {
    authError = true;
    console.log(err);
  });
  if (authError) {
    res.status(401).send("Authentication Token not valid");
    return;
  }
  next();
}

module.exports = validateToken;
