/*
* Copyright (c) 2016- Ihab Abusafa,
* All rights reserved.
*
* This source code is licensed under the license found in the LICENSE file in
* the root directory of this source tree.
*/

import React, {PropTypes}               from 'react';
import styles                           from './BasemapsManager.scss';


export default class BasemapsManager extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    var container = document.getElementById('MapBasemapsSheet');
    this.hot = new Handsontable(container, {
        data: [],
        dataSchema: {_id: null,name: null, fullScreen: null, zoomControls: null, print: null, routing: null},
        colHeaders: ['الكود','الاسم' ,  'تكبير الشاشة' ,'التصغير والتكير' ,'الطباعة','أقرب مسار' ],
         columns: [
          {
             data: '_id',
             readOnly: true
          },
          {
            data: 'name'
          },
          {
            data: 'fullScreen',
            type: 'checkbox'
          },
          {
            data: 'zoomControls',
            type: 'checkbox'
          },
          {
            data: 'print',
            type: 'checkbox'
          },

          {
            data: 'routing',
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
    return (
      <div>
        <div>
          <h1 className="notification"> خرائط الأساس</h1>
          <hr />
          <div className="ltr" id="MapBasemapsSheet"></div>
        </div>
      </div>
    );
  }
}

BasemapsManager.propTypes = {
};
