var orm = require("orm");
const spiderweb = require('spiderweb-client');


module.exports.connect = function(callback) {
  const config = spiderweb.getConfig();
  orm.connect(config.skeletonDb, function (err, db) {
    if (err) throw err;


    db.sync(function(err) {
      if (err) throw err;

      callback(null, db)
    });
  });

};
