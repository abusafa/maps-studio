import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {

    if ( Meteor.users.find().count() === 0 ) {
      var _userId = Accounts.createUser({
          username: 'admin',

          password: 'admin',

          profile: {
            isAdmin:true,
            mobile: '099999999',
            committee: '',
            name: 'مدير النظام',
            email:'admin@example.com',
            active:true
          }
      });

      Roles.setUserRoles(_userId, ['sysadmin'], Roles.GLOBAL_GROUP);

  }

});
