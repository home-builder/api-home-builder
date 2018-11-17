'use strict';


const {
  parse,
  stringify
} = require('flatted/cjs');
var app = require('../../server/server');
var async  = require('async')

module.exports = function (Survey) {
  Survey.beforeRemote('create', (ctx, modelIns, next) => {
    let date = new Date()
    date = date.toLocaleString();
    ctx.req.body["createdTime"] = date;
    //set name
    let _userId = ctx.req.accessToken.userId;
    console.log('token:', _userId)
    let modelStaff = app.models.staff;

    modelStaff.findById(_userId, function(err, staff) {
      if (err || !staff) { return next(err)}
      ctx.req.body.name = staff.username
      next()
    });
    
  });

};