const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const dotenv = require("dotenv").config();

const jwksHost = process.env.HANKO_API_URL;

function validateToken(req, res, next) {
  jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 2,
      jwksUri: `${jwksHost}/.well-known/jwks.json`,
    }),
    algorithms: ["RS256"],
    getToken: function fromCookieOrHeader(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.cookies && req.cookies.hanko) {
        return req.cookies.hanko;
      }
      return null;
    },
  })(req, res, next);
}

module.exports = validateToken;
