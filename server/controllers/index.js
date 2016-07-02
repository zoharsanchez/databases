// server/controllers/index.js defines the messages and users controllers that your application will use. Skeletons of the controllers have already been created but you'll have to write out the details for their methods

var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      var resBody = {
        method: req.method,
        url: req.originalUrl,
        results: [{username: 'Charhar', message: 'hello', roomname: 'Lobby'}]
      };

      res.json(resBody);
      res.end();
      // console.log('get being called');
      // req.on('data', function (data) {
      //   var parsedData = data;
      // });
      // req.on('end', function() {
      //   // res.write(parsedData);
      //   res.end();
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var ourObject = req.body;
      models.messages.post(ourObject, res);

      var resBody = {
        method: req.method,
        url: req.originalUrl,
        results: [{username: 'Charhar', message: 'hello', roomname: 'Lobby'}]
      };

      res.json(resBody);
      res.end();

      // console.log('post being called');
      // req.on('data', function(data) {
      //   var parsedData = JSON.parse(data);
      //   models.post(parsedData);
      // });
      // req.on('end', function(err) {
      //   if (err) {
      //     res.writeHead(404, {'Content-Type': 'text/plain'});
      //     res.end();
      //     return;
      //   }
      //   res.writeHead(200, {'Content-Type': 'text/plain'});
      //   res.end();
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var ourObject = req.body;
      console.log(ourObject);
      models.users.post(ourObject, res);

      var resBody = {
        method: req.method,
        url: req.originalUrl,
        results: [{username: 'Charhar', message: 'hello', roomname: 'Lobby'}]
      };

      // res.json(resBody);
      // res.end();
    }
  }
};

