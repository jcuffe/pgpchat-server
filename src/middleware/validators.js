const jwt = require ('express-jwt');
const jwksRsa = require('jwks-rsa');

const jwtValidator = jwt({
  secret : jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://metaphornado.auth0.com/.well-known/jwks.json"
  }),

  audience: "https://metaphornado.net/pgpchat",
  issuer: "https://metaphornado.auth0.com/",
  algorithms: [ "RS256" ]
});

const scopeValidator = () => {};

module.exports = { jwtValidator, scopeValidator };