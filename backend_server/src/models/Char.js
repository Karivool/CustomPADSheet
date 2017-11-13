var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Chars
  var Char = new Schema({
    no: { type: Number },
    name: { type: String, default: "" },
    rare: { type: Number, default: 1 },
    cost: { type: Number, default: 0 },
    el1: { type: String, default: "fire" },
    el2: { type: String, default: "" },
    type1: { type: String, default: "attacker" },
    type2: { type: String, default: "" },
    type3: { type: String, default: "" },
    hp: { type: Number, default: 1 },
    atk: { type: Number, default: 1 },
    rcv: { type: Number, default: 0 },
    leaderttl: { type: String, default: "" },
    leadertxt: { type: String, default: "" },
    activettl: { type: String, default: "" },
    activetxt: { type: String, default: "" },
    cooldownmax: { type: Number, default: 0 },
    cooldownmin: { type: Number, default: 0 },
    aw1: { type: String, default: "" },
    aw2: { type: String, default: "" },
    aw3: { type: String, default: "" },
    aw4: { type: String, default: "" },
    aw5: { type: String, default: "" },
    aw6: { type: String, default: "" },
    aw7: { type: String, default: "" },
    aw8: { type: String, default: "" },
    aw9: { type: String, default: "" },
  },
  {
    collection: 'chars'
  });

module.exports = mongoose.model('Char', Char);
