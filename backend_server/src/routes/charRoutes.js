var express = require('express');
var app = express();
var charRouter = express.Router();

// Require Char model in our routes module
var Char = require('../models/Char');

// Defined store route
charRouter.route('/add/post').post(function (req, res) {
  console.log("req.body:")
  console.log(req.body.char);
  var char = new Char(req.body.char);
  console.log("");
  console.log("char:")
  console.log(char);
      char.save()
    .then(char => {
    res.status(200).json({char});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
charRouter.route('/').get(function (req, res) {
  Char.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined edit route
charRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Char.findById(id, function (err, char){
      res.json(char);
  });
});

//  Defined update route
charRouter.route('/update/:id').post(function (req, res) {
  Char.findById(req.params.id, function(err, char) {
    if (!char)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      char.char = req.body.char;

      char.save().then(char => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
charRouter.route('/delete/:id').get(function (req, res) {
  Char.findByIdAndRemove({_id: req.params.id},
	   function(err, char){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = charRouter;
