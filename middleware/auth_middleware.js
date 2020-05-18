
const jwt = require('jsonwebtoken');

//****************MIDDLEWARE DE VERIFICATION DE TOKEN POUR L'ACCES A CERTAINES PAGES DU SITE*********************************

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    console.log(decodedToken);
    next();

  } catch(e){
        if(e instanceof jwt.JsonWebTokenError){
            res.status(401).json({
            error:'Invalid request The JWT is Unauthorised!'
            })
        }
       else
        res.status(400).json({
         error: 'Bad request'});

    }
  };