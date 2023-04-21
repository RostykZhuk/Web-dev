const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(
      'mongodb+srv://rostyk:QFf8yhTFGivO9xAb@mernapp.yuijwxv.mongodb.net/bookstore'
    )
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
