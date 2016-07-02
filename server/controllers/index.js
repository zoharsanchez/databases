var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, body) {
        if (err) {
          res.status(404);
          res.json(err);
          res.end();
          return;
        }
        res.json(body);
        res.end();
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function(err, body) {
        if (err) {
          res.status(404);
          res.json(err);
          res.end();
          return;
        }
        res.json(body);
        res.end();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, body) {
        if (err) {
          res.status(404);
          res.json(err);
          res.end();
          return;
        }
        res.json(body);
        res.end();
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(err, body) {
        if (err) {
          res.status(404);
          res.json(err);
          res.end();
          return;
        }
        res.json(body);
        res.end();
      });
    }
  },

  options: function (req, res) {
    res.status(200);
    res.json({message: 'You are okay'});
    res.end();
  }
};
