import React, {PropTypes} from 'react';

export default class MapComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var container = document.getElementById('MapComponentsSheet');
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
          <h1 className="notification"> مكونات الخريطة</h1>
          <hr />
          <div className="ltr" id="MapComponentsSheet"></div>
        </div>
      </div>
    );
  }
}

MapComponents.propTypes = {
};
