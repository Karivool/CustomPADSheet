let express = require('express');
let mongojs = require('mongojs');
let app = express();
let db = mongojs('mongodb', ['padsheet']);
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/charinfo', function (req, res) {
  console.log("GET request made.");

  db.collection("padsheet").find(function (err, docs) {
    console.log("Collection obtained:" + docs);

    console.log(res.json(docs));
  });
});

app.post('/charinfo', function (req, res) {
  console.log(req.body);
  db.padsheet.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/charinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(id);
  db.padsheet.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  })
});

app.get('/charinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(id);
  db.padsheet.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/charinfo/:id', function (req, res) {
  let id = req.params.id;
  console.log(req.body.name);
  db.padsheet.findAndModify({query: {_id:mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, hp: req.body.hp, atk: req.body.atk, rcv: req.body.rcv}},
    new: true}, function (err, doc) {
      res.json(doc);
  });
});

let port = process.env.PORT || 3000;

app.listen(port);
console.log("Running on " + port.toString());
