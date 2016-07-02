// server/models/index.js defines the messages and users models that your application will use. Skeletons of the models have already been created but you'll have to write out the details for their methods

var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (obj, res) {
      console.log('here is our obj ', obj);
      var entry = {
        message: obj.text,
        roomname: obj.roomname,
        userID: 1
      };
      db.connection.query('insert into messages set ?', entry, function (err) {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.end();
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (obj, res) {
      var entry = {name: obj.username};
      console.log(entry);
      db.connection.query('insert into users set ?', entry, function(err) {
        if (err) {
          console.log('shit happens');
          // res.json('shit happens');
          console.log(err);
          res.end();
        } else {
          res.json(entry);
          res.end();
        }
      });
      //db.connection.end();
    }
  }
};

// con.query('INSERT INTO employees SET ?', employee, function(err,res){
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });