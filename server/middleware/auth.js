const jwt = require('jsonwebtoken')

const secretKey = "dskfjlsdpkafjklsdfjlksdjf398jsdjfkl";

const authorize = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) {
    return res.status(403).send("");
  } else {
    const token = auth.split(" ")[1];
    jwt.verify(token, secretKey, (err, usuario) => {
      if (err) {
        return res.status(403).jsonp({ mensaje: "no autorizado" })
      } else {
        console.log(usuario)
      }
    });
    next();
  }
}

module.exports = authorize
