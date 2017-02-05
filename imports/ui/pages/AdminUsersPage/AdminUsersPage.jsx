import React, {PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {each} from 'lodash';
export default class AdminUsersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

    var container = document.getElementById('example');


    var _departmentNames = [
    'المساحة',
    'المرافق',
    'التخطيط',
    'الرقابة الشاملة'
  ];


  this.hot = new Handsontable(container, {
      data: [],
      dataSchema: {_id: null,name: null,mobile: null,email: null,userName: null,department: null,role: null,   active: null},
      colHeaders: ['الكود','الاسم' , 'الجوال' , 'البريد الإلكتروني' , 'الإدارة' , 'اسم المستخدم'  , 'الصلاحية' , 'نشط'  ],
      columns: [
        {
           data: '_id',
           readOnly: true
        },
        {
          data: 'name'
        },
        {
          data: 'mobile'
        },
        {
          data: 'email'
        },
        {
          data: 'department',
          type: 'dropdown',
          source: _departmentNames
        },
        {
          data: 'userName'
        },

        {
          data: 'role',
          type: 'dropdown',
          source: ['مدير نظام','رئيس', 'عضو ', 'زائر']
        },
        {
          data: 'active',
          type: 'checkbox'
        }
      ],
      minSpareRows:1,
      contextMenu: {
        items:{
          "remove_row": {
            name: 'حذف المستخدم'
          }
        }
      },
      stretchH: 'all',
      afterChange: function (change, source) {
        //Session.set("committee-members", this.getData());

        /*console.log("hot.getData()", this.getSourceData());
        Tasks.update({_id: selectedTask._id}, {
          $set: {sheet: this.getData()}
        });*/


      }
  });


  }


  manipulateUsers(){
    let _sourceUsersData = this.hot.getSourceData();


    // call method here
    Meteor.call("manipulateUsers", _sourceUsersData);
  }

  render() {
    console.log("users", this.props.users);
    if(this.hot){
      var _hotUsers = [];
      each(this.props.users, (user)=> {
        // not add admin user
        if(user.profile.isAdmin) return;
        console.log("user", user);

        _hotUsers.push({
          _id:user._id,
          userName: user.username,
          email: user.profile.email,
          name: user.profile.name,
          mobile: user.profile.mobile,
          active: user.profile.active,
          committee: user.profile.committee,
          role: user.roles.__global_roles__[0]
        });
      });
      console.log('_hotUsers',_hotUsers);
      this.hot.loadData(_hotUsers);
    }


    return (
      <div>
        <h1 className="notification ">المستخدمون</h1>

        <div className="margin padding">
          <button className="button is-success" onClick={this.manipulateUsers.bind(this)}>حفظ</button>

        </div>
        <div className="ltr" id="example"></div>
        
        <div className="margin padding">
          <button className="button is-success" onClick={this.manipulateUsers.bind(this)}>حفظ</button>
        </div>
      </div>
    );
  }
}

AdminUsersPage.propTypes = {
};


export default createContainer(() => {
  Meteor.subscribe('userdata');

  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
  };
}, AdminUsersPage);
