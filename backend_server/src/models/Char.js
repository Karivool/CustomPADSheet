var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Chars
  var Char = new Schema({
    no: Number,
    name: String,
    rare: { type: Number, default: 1 },
    cost: Number,
    el1: String,
    el2: { type: String, default: "" },
    type1: String,
    type2: { type: String, default: "" },
    type3: { type: String, default: "" },
    hp: { type: Number, default: 1 },
    atk: { type: Number, default: 1 },
    rcv: { type: Number, default: 0 },
    leaderttl: { type: String, default: "" },
    leadertxt: { type: String, default: "" },
    activettl: { type: String, default: "" },
    activetxt: { type: String, default: "" },
    cooldown: { type: Array, default: [1, 1] },
    aw1: String,
    aw2: String,
    aw3: String,
    aw4: String,
    aw5: String,
    aw6: String,
    aw7: String,
    aw8: String,
    aw9: String,
  },
  {
    collection: 'chars'
  });

module.exports = mongoose.model('Char', Char);
