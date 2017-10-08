let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for Chars
  let Char = new Schema({
    char: {
      type: String
    },
  },
  {
    collection: 'chars'
  });

module.exports = mongoose.model('Char', Char);
