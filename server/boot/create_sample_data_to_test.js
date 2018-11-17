'use strict';

module.exports = function(app) {
  var staff = app.models.staff;
  staff.create(
    [{email: 'foo@bar.com', password: 'bar', username: 'Hoang Khanh Phuong'},
    {email: 'foo@bar1.com', password: 'bar', username: 'Nguyen Van A'} ],
      function(err, userInstance) {
        console.log(userInstance);
      });
};
