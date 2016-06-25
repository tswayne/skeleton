var MapGenerator = require('./lib/mapgenerator');
var generator = new MapGenerator();
var propertyFactory = require('./lib/properties');

module.exports.generateMap = function(props) {
  const properties = propertyFactory.applyDefaults(props);
  generator.createHexagonPattern(
    properties.width,
    properties.height,
    properties.hexagonSize,
    properties.useDistortion
  );

  generator.generate(
    properties.numberOfCountries,
    properties.countrySizeVariance,
    properties.useCompactShapes
  );

  return generator.getMap();
};
