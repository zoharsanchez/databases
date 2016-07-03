var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('select * from messages', function (err, rows, fields) {
        if (err) {
          console.log('serious errors');
          callback(err, null);
        } else {
          var moddedRows = [];
          rows.forEach(function getUser(obj) {
            db.connection.query('select name from users where id="' + obj.userID + '"', function(err, subRows, fields) {
              if (err) {
                console.log('here is an error');
                callback(err, null);
                return;
              }
              console.log(subRows);
              obj.username = subRows[0] ? subRows[0].name : 'anonymous';
              moddedRows.push(obj);
              if (moddedRows.length === rows.length) {
                console.log('is anything coming in?');
                callback(null, moddedRows);
              } 
            });
          });
        }
      });
    }, // a function which produces all the messages
    post: function (obj, callback) {
      var entry = {
        message: obj.text,
        roomname: obj.roomname
      };
      entry['roomname'] = entry.roomname ? entry.roomname : 'lobby';
      module.exports.users.post(obj.username, function(err) {
        if (err) {
          console.log('YOU SUCK');
          return;
        }
        db.connection.query('select id from users where name="' + obj.username + '"', function (err, rows, fields) {
          if (err) {
            console.log('YOU SUCK MORE');
            return;
          } else {
            entry['userID'] = rows[0] ? rows[0].id : 1;
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
            callback();
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