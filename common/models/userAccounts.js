'use strict';

module.exports = function(UserAccounts) {
  UserAccounts.newUser = async function(data) {
    const datas = {
      username:data.username,
      password:data.password,
      email:data.email
    };
    const userAccountCreate = await UserAccounts.create(datas);
    return userAccountCreate;
  };

  UserAccounts.remoteMethod('newUser', {
    http: {path: '/CreateUser/newUser', verb: 'post'},
    description: 'Create new user',
    accepts: [
      {
        arg: 'New User',
        type: 'object',
        required: true,
        http: {source: 'body'},
        description: 'Insert New User'
      },
      {arg: 'options', type: 'object', http: 'optionsFromRequest'}
    ],
    returns: {arg: 'result', type: 'string', root: true}
  });



};
