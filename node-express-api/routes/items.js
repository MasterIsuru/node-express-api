var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.Item.findAll()
    .then( users => {
      res.status( 200 ).json( users )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    });
});

module.exports = router;
