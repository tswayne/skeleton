module.exports.applyDefaults = function(properties) {
  return {
    width: properties.width | 1000,
    height: properties.height | 600,
    hexagonSize: properties.hexagonSize | 40,
    numberOfCountries: properties.numberOfCountries | 50,
    countrySizeVariance: properties.countrySizeVariance | .5,
    useDistortion: properties.useDistortion | false,
    useCompactShapes: properties.useCompactShapes | false
  }
};
