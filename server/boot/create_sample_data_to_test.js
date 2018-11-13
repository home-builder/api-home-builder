'use strict';

module.exports = function(app) {
  var staff = app.models.staff;
  staff.create(
    [{email: 'foo@bar.com', password: 'bar'},
    {email: 'foo@bar1.com', password: 'bar'}],
      function(err, userInstance) {
        console.log(userInstance);
      });
};
