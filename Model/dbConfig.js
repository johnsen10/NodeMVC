var mongoose = require('mongoose')

///Connexion à la base de donnée
mongoose.connect('mongodb+srv://ppalioune:passer@cluster-4oppz.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

require('./activiteModel.js');
