'use strict';

module.exports = function(User) {
  User.afterRemote('login', function(ctx) {
    ctx.res.cookie('access_token',
        ctx.result.id, {signed: true,
          maxAge: ctx.result.ttl * 1000});
    ctx.res.cookie('user_id',
      ctx.result.userId, {signed: true,
        maxAge: ctx.result.ttl * 1000});
    return Promise.resolve();
  });

  User.afterRemote('logout', function(ctx) {
    ctx.res.clearCookie('access_token');
    return Promise.resolve();
  });
};
