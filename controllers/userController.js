const User = require('../models/user_model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    res.render('registration_main', {layout : 'index_layout'});
};


//****************CALLBACK INSCRIPTION EN BASE DE DONNEES************************

exports.signup_post= (req, res, next) => {
                       console.log('En cours de creation...')
                       console.log(req.body.email)
                        bcrypt.hash(req.body.password, 10)
                           .then(hash => {
                             const user = new User({
                               email:req.body.email,
                               pseudo: req.body.pseudo,
                               password: hash
                             });
                             user.save()
                               .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                               .catch(error => res.status(400).json({ error }));
                           })
                           .catch(error => res.status(500).json({ error }));

                       res.redirect('/index');
};

//*********************END INSCRIPTION********************************


exports.login = (req, res, next) => {
    res.render('login_main', {layout : 'index_layout'});

};

//***********************CALLBACK AUTHENTIFICATION*******************************

exports.login_post = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
    console.log("on se log...")
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }

          const token=jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
           )
           //console.log("token:", token);
           res.cookie("token", token,{ maxAge: '3600000' });

   //*************Une fois qu'on est authentifié, on est automatiquement redirigé vers la page d'accueil**********************************
           res.redirect('/index');
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

};
