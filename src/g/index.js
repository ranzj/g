var Common = require('./common');

var G = {
  Group: require('./core/group'),
  Shape: require('./core/shape'),
  Rect: require('./shape/rect'),
  Circle: require('./shape/circle'),
  Ellipse: require('./shape/ellipse'),
  Path: require('./shape/path'),
  Text: require('./shape/text'),
  Line: require('./shape/line'),
  Image: require('./shape/image'),
  Polygon: require('./shape/polygon'),
  Polyline: require('./shape/polyline'),
  Arc: require('./shape/arc'),
  Fan: require('./shape/fan'),
  Cubic: require('./shape/cubic'),
  Quadratic: require('./shape/quadratic'),
  Marker: require('./shape/marker'),
  debug: function(debug) {
    Common.debug = debug;
  }
};

module.exports = G;