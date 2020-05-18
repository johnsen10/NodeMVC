var mongoose = require('mongoose')
require('./activiteModel.js');


///Connexion à la base de donnée
mongoose.connect('mongodb+srv://kandangkandang:passer123@kandangkandang-ezwcm.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

