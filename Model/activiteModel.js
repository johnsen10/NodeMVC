var mongoose = require ('mongoose')

var activiteSchema = new mongoose.Schema({
  nomActivite:{type: String, require:true},
  dateActivite:{type: Date, require: true},
  nbPlace: {type: Number, require: true},
  catActivite: {type: String, require:true},
  descActivite: {type: String, require: true}
})


module.exports = mongoose.model('activite', activiteSchema);
