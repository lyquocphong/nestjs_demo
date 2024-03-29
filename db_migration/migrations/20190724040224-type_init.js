ObjectID = require('mongodb').ObjectID;

module.exports = {
  up(db) {
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    return db.collection('test_items').insertOne(
      { item: "canvas2", qty: 200, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
    )
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    return db.collection('test_items').deleteMany( {item: "canvas2"} );
  }
};
