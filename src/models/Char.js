let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for Chars
  let Char = new Schema({
    "no": Number,
    "name": String,
    "rare": { Number, default: 1 },
    "cost": Number,
    "el1": String, "el2": { String, default: "" },
    "type1": String, "type2": { String, default: "" }, "type3": { String, default: "" },
    "hp": { Number, default: 1 }, "atk": { Number, default: 1 }, "rcv": { Number, default: 0 },
    "leaderttl": { String, default: "" },
    "leadertxt": { String, default: "" },
    "activettl": { String, default: "" },
    "activetxt": { String, default: "" },
    "cooldown": { Array, default: [1, 1] },
    "awakenings": { Array, default: [] }
  },
  {
    collection: 'chars'
  });
