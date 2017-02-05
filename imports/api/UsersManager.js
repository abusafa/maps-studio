import { Meteor } from 'meteor/meteor';


Meteor.methods({
  manipulateUsers : function(usersSourceData){
    _.each(usersSourceData, (userRow)=>{
      if(userRow.userName && !userRow._id)
      {
        var _userId = Accounts.createUser({
            username: userRow.userName,

            profile:{
              email: userRow.email,
              mobile: userRow.mobile,
              committee: userRow.committee,
              name: userRow.name,
              active: userRow.active

            } ,
            password: 'password'
        });
        Roles.setUserRoles(_userId, [userRow.role], Roles.GLOBAL_GROUP);

      }
      if(userRow.userName && userRow._id)
      {
         Meteor.users.update(
           {_id:userRow._id},
           { $set:
             {
               username: userRow.userName,

               profile:{
                 email: userRow.email,
                 mobile: userRow.mobile,
                 committee: userRow.committee,
                 name: userRow.name,
                 active: userRow.active
               }
             }
           }
         );

         Roles.setUserRoles(userRow._id, [userRow.role], Roles.GLOBAL_GROUP);

      }
    });

  }
});
