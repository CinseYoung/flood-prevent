export default {
  target: 'map_container',
  view: {
    center: [88.434653, 31.559746],
    zoom: 7,
    maxZoom: 18,
    minZoom: 0,
    projection: 'EPSG:4326'
  },
  urls: [{
    url: 'http://arcgis.keepsoft.net:9472/arcgis/rest/services/BaseMap_map/MapServer',
    overlay: true
  }]
}
