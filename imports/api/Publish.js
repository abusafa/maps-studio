import { Meteor } from 'meteor/meteor';
import { Configs } from '/imports/api/Configs.js';


Meteor.publish("userdata", function() {
     var currentUser;
     currentUser = this.userId;


     if (currentUser) {
          u = Meteor.users.find({
          //   _id: currentUser
         }, {
         fields: {
             // Default
             "isAdmin": 1,
             "username": 1,
             "emails": 1,
             // Created profile property
             "profile": 1,
             // Created roles property
             "apps": 1,
             "committee": 1,
             "roles": 1,

         }
      });
      //console.log("currentUser", u.fetch());

      return u;
    } else {
      return this.ready();
  }
});






Meteor.publish('configs', function configsPublication() {
  return Configs.find();
});
