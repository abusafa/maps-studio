import React, {PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {each} from 'lodash';

export default class LayerPermissions extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount(){
    var container = document.getElementById('LayerPermissionsHot');
    this.hot = new Handsontable(container, {
        data: [],
        dataSchema: {_id: null,name: null, search: null, share: null, edit: null},
        colHeaders: ['الكود','الاسم' ,  'بحث' ,'مشاركة' ,'تعديل'  ],
        columns: [
          {
             data: '_id',
             readOnly: true
          },
          {
            data: 'name'
          },
          {
            data: 'search',
            type: 'checkbox'
          },
          {
            data: 'share',
            type: 'checkbox'
          },
          {
            data: 'print',
            type: 'checkbox'
          }
        ],
        minSpareRows:1,

        stretchH: 'all',
        afterChange: function (change, source) {

        }
    });

  }

  render() {


    if(this.hot){
      var _hotUsers = [];
      each(this.props.users, (user)=> {
        // not add admin user
        if(user.profile.isAdmin) return;
        console.log("user", user);

        _hotUsers.push({
          _id:user._id,
          name: user.profile.name,
          search: false,
          share: false,
          edit: false
        });
      });
      console.log('_hotUsers',_hotUsers);
      this.hot.loadData(_hotUsers);
    }

    return (
      <div className="layer-permissions">
        <h1 className="notification is-primary">{this.props.layer.title}</h1>
        <div className="ltr" id="LayerPermissionsHot"></div>
      </div>
    );
  }
}

LayerPermissions.propTypes = {
};



export default createContainer(() => {
  Meteor.subscribe('userdata');

  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
  };
}, LayerPermissions);
