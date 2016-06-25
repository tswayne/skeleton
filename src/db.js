var orm = require("orm");


module.exports.connect = function(callback) {
  orm.connect(opts, function (err, db) {
    if (err) throw err;

    var Map = db.define("maps", {
      id: {type: 'serial', key: true},
      width     : Number,
      height    : Number
    });

    var Location = db.define("locations", {
      id: {type: 'serial', key: true},
      svgString     : String
    });


    Location.hasOne('map', Map, {reverse: 'locations'});
    // add the table to the database
    db.sync(function(err) {
      if (err) throw err;

      module.exports.Map = Map;
      module.exports.Location = Location;

      callback(null, db)
    });
  });

};
