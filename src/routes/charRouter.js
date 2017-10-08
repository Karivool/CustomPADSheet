// charRoutes.js

let express = require('express');
let app = express();
let charRouter = express.Router();

// Require Char model in our routes module
let Char = require('../models/Char');

// Defined store route
charRouter.route('/add/char').post(function (req, res) {
  let char = new Char(req.body);
      char.save()
    .then(char => {
    res.json('Character added successfully');
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
  let id = req.params.id;
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
