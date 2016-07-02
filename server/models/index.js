var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('select * from messages', function (err, rows, fields) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, rows.map(function getUser(obj) {
            db.connection.query('select name from users where id ="' + obj.userID + '"', function(err, rows, fields) {
              obj.username = rows.name;
            });
            return obj;
          }));
        }
      });
    }, // a function which produces all the messages
    post: function (obj, callback) {
      var entry = {
        message: obj.text,
        roomname: obj.roomname
      };
      db.connection.query('select id from users where name="' + obj.username + '"', function (err, rows, fields) {
        console.log('this is our rows: ', rows);
        if (err) {
          return;
        } else {

          entry['userID'] = rows[0].id;
          console.log('HEEEEEEY LOOOOOOK LIIIIIIISTEN', entry['userID']);
          db.connection.query('insert into messages set ?', entry, function (err) {
            if (err) {
              console.log(err);
              callback(err, null);
            } else {
              callback(null, entry);
            }
          });
        }
      });

    }
  },

  users: {
    get: function (callback) {
      db.connection.query('select * from messages', function (err, rows, fields) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, rows);
        }
      });
    },
    post: function (string, callback) {
      var entry = {name: string};
      db.connection.query('select name from users', function (err, rows, fields) {
        for (var x = 0; x < rows.length; x++) {
          if (rows[x].name === string) {
            return;
          }
        }
        db.connection.query('insert into users set ?', entry, function(err) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, entry);
          }
        });
      });
    }
  }
};