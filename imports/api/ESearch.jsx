import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


Meteor.methods({
  'es.test'(text, layer, property) {
    return {'msg':'ok'};
  },

  'es.search'(text, layer, property) {
    console.log(text, layer, property);

    //let serachUrl = `http://192.168.99.100:9200/${layer}/_search?pretty`;
    let serachUrl = `http://10.27.0.7:9200/${layer}/_search?pretty`;
    let geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    this.unblock();
/*
    let query = {
        size:2500,
        "query" : {
            "match_phrase" : {

            }
        }
    };
    query.query.match_phrase["properties."+property] = {
      query: text,
      slop:  4
    };
*/


    //text.match(/(أ|إ|ئ)/)
    //text = text.split(' ').join('* AND *');


    text = "*" + text.split(' ').join('* AND *') + "*";


    let query = {
      size:50,
      "query": {
        "query_string": {
          "query": `${text}`
          }
        }
    };

    console.log(query);


    let result = HTTP.post(serachUrl, {data:query});
    _.each(result.data.hits.hits, function(hit){


      var title = '';
      var description = '';



      switch(layer){
        case 'parcels':
          hit._source.properties.stroke=  '#555555';
          hit._source.properties["stroke-width"]= 2;
          hit._source.properties["stroke-opacity"]=  1;
          hit._source.properties.fill=  "#00fdff";
          hit._source.properties["fill-opacity"]=  0.5;
          title = `قطعة رقم ${hit._source.properties.PARCEL_ID}`;
          description = `عنيزة، مخطط  ${hit._source.properties.PLAN_ID}`;
        break;

        case 'landmarks':
          hit._source.properties["marker-color"]= "#fc4353";
          hit._source.properties["marker-size"]= "large";
          hit._source.properties["marker-symbol"]= "city";
          let buildingname = hit._source.properties.BUILDING_NAME || ' ... ';
          title = ` ${hit._source.properties.LANDMARK_NAME}`;
          description = `اسم المبنى:  ${buildingname}`;
        break;

        case 'districts':

          hit._source.properties["stroke"]=  "#555555";
          hit._source.properties["stroke-width"]= 2;
          hit._source.properties["stroke-opacity"]=  1;
          hit._source.properties["fill"]=  "#eff397";
          hit._source.properties["fill-opacity"]=  0.5;

          title = ` ${hit._source.properties["DISTRICT_NAME_ARABIC"]}`;
          description = ``;
        break;

        case 'streets':
          title = ` ${hit._source.properties["ROAD_NAME_ARABIC"]}`;
          description = `${hit._source.properties["ROAD_WIDTH"]}`;
        break;

        case 'blocks':
          hit._source.properties["stroke"]=  "#555555";
          hit._source.properties["stroke-width"]= 2;
          hit._source.properties["stroke-opacity"]=  1;
          hit._source.properties["fill"]=  "#00f900";
          hit._source.properties["fill-opacity"]=  0.5;
          title = ` ${hit._source.properties["PLAN_NO"]}`;
          description = ``;
        break;

        case 'shops':

          hit._source.properties["marker-color"]= "#598BE2";
          hit._source.properties["marker-size"]= "large";
          hit._source.properties["marker-symbol"]= "star-stroked";
          let image = hit._source.properties["IMAGE_PATH"];
          image = 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png';
          title = ` ${hit._source.properties["SHOP_NAME_ARABIC"]}`;
          description = ` <img width="200px" src="${image}"> `;
        break;



      }

      hit._source.properties.title = title;
      hit._source.properties.description = description;


      // to valide geojson type
      switch(hit._source.geometry.type.toLowerCase()){
        case 'multipolygon' :
          hit._source.geometry.type ='MultiPolygon';
        break;
        case 'polygon' :
          hit._source.geometry.type ='Polygon';
        break;
        case 'point' :
          hit._source.geometry.type ='Point';
        break;
        case 'linestring' :
          hit._source.geometry.type ='LineString';
        break;
        case 'multipoint' :
          hit._source.geometry.type ='MultiPoint';
        break;
        case 'multilinestring' :
          hit._source.geometry.type ='MultiLineString';
        break;
        case 'geometrycollection' :
          hit._source.geometry.type ='GeometryCollection';
        break;
      }

      geojson.features.push(hit._source);
    });
    //console.log(geojson)
    return geojson;
  }
});
