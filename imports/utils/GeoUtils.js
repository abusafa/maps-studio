export default class GeoUtils {
}


export function GeoJsonToList(geojson , options){
  return geojson.features.map((feature)=>{
    return {
      _id: feature.ogc_fid,
      title: feature.properties[options.property],
      description : '',
      icon: '',
      feature: feature
    };
  });
}
